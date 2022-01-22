import URL from '../models/URL.js';
import {nanoid} from 'nanoid';

export const shortLink = async (req, res) => {
  const {url} = req.body;

  const findURL = await URL.findOne({url});
  if (findURL) {
    res.status(200).json({'shortURL': 'http://localhost/' + findURL.code});
  } else {
    const code = nanoid(5);
    const newURL = new URL({
      url,
      code,
    });
    await newURL.save();
    res.status(200).json({'shortURL': 'http://localhost/' + code});
  }
};

export const getShortLink = async (req, res) => {
  const code = await URL.findOne({code: req.params.id});

  if (code != null) {
    res.redirect(code.url);
  } else {
    res.status(404).json('No url found');
  }
};
