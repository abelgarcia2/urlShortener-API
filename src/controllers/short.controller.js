import URL from '../models/URL.js';
import Joi from 'joi'
import { nanoid } from 'nanoid';

// const linkSchema = Joi.string().pattern(new RegExp("^(?:http(s)?:\/\/)?[\w.\-]+(?:\.[\w\.\-]+)+[\w\-\.\_~:/?#[\]@!\$&'\(\)\*\+,;=.]+$"))

export const shortLink = async (req, res) => {
  const { url } = req.body;

  try {
    // await linkSchema.validateAsync(url)
    const findURL = await URL.findOne({ url });
    if (findURL) {
      res.status(200).json({ 'code': findURL.code });
    } else {
      const code = nanoid(5);
      const newURL = new URL({
        url,
        code,
      });
      await newURL.save();
      res.status(200).json({ 'code': code });
    }
  } catch (err) {
    res.status(500).json({ msg: 'not valid' + err})
  }
};

export const getShortLink = async (req, res) => {
  const code = await URL.findOne({ code: req.params.id });
 
  if (code != null) {
    res.redirect(code.url);
  } else {
    res.status(404).json('No url found');
  }
};
