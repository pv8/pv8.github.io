# pv8.github.io
[![Build Status](https://travis-ci.org/pv8/pv8.github.io.svg?branch=main)](https://travis-ci.org/pv8/pv8.github.io)

Source code of my personal website.

## Running locally

1. Setup the environment as described in [Github Help][github-help].

2. Clone this repository:

  ```bash
  $ git clone git@github.com:pv8/pv8.github.io.git
  ```

3. Running jekyll locally:

  ```bash
  $ bundle exec jekyll serve --config _config.yml,_config_local.yml
  ```
And the site will be available at `http://localhost:4000`.

4. Testing:
```bash
$ bundle exec rake test
```


## Credits
- Layout from [Jekyll][jekyll] default theme
- Icons by [Font-Awesome][fontawesome]
- Favicons generated with [Real Favicon Generator][favicongenerator]

## License
The **content** is licensed under a [Creative Commons Attribution 4.0 International License][cc-license].
[![Creative Commons License][cc-image]][cc-license]

The **code** is licensed under [MIT Licensed][mit-license].

[github-help]: https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/
[jekyll]: http://jekyllrb.com/
[fontawesome]: http://fontawesome.io/
[mit-license]: http://www.opensource.org/licenses/mit-license.php
[cc-license]: href="http://creativecommons.org/licenses/by/4.0/
[cc-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[favicongenerator]: https://realfavicongenerator.net
