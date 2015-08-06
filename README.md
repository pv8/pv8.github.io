# povieira.github.io
[![Build Status](https://travis-ci.org/povieira/povieira.github.io.svg?branch=master)](https://travis-ci.org/povieira/povieira.github.io)

Source code from my personal website.

## Running locally

1. Setup the environment as described in [Github Help][github-help]

2. Clone this repository:

  ```bash
  $ git clone git@github.com:povieira/povieira.github.io.git
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

## License
The following directories and their contents are Copyright Pablo O Vieira. You may not reuse anything therein without my explicit permission:

* [_posts](https://github.com/povieira/povieira.github.io/tree/master/_posts)

All other directories and files are [MIT Licensed][mit-license].

[github-help]: https://help.github.com/articles/using-jekyll-with-pages/#github-help
[jekyll]: http://jekyllrb.com/
[fontawesome]: http://fontawesome.io/
[mit-license]: http://www.opensource.org/licenses/mit-license.php
