---
layout: post
title:  "Running a simple HTTP server with Python"
date:   2015-03-23 19:00:00 -0300
updated: 2015-04-01 11:30:00 -0300
categories: python
comments: true
---

Sometimes we need just a quick HTTP server up and running, and we don't want to bother setting up *Apache*, *Nginx* or anything like that. We just want to check a static website layout... or share some pictures in our local network. Quick and simple.

Well, [Python][python_download] can help us with that. It comes with a built-in [simple HTTP server][py27simpleserver] which will turn a local directory into a web server directory. And it's only a line command away:
{% highlight bash %}
$ python -m SimpleHTTPServer
{% endhighlight %}

We will get a message informing that it's serving on port 8000 (which is the default port):
{% highlight bash %}
Serving HTTP on 0.0.0.0 port 8000 ...
{% endhighlight %}

And that's it! It's serving our directory on `http://localhost:8000`.

For example, let's say I want to share my `~/Pictures` directory with my colleagues via local network on port `5000`:
{% highlight bash %}
$ cd ~/Pictures/
$ python -m SimpleHTTPServer 5000
Serving HTTP on 0.0.0.0 port 5000 ...
{% endhighlight %}

Assuming my IP address on the local network is `10.1.0.1`, my colleagues will be able to check out my pictures on `http://10.1.0.1:5000`.

#### Python 3

The HTTP server changes a little bit in Python 3. A **note** from the [docs][py27simpleserver]:

> The `SimpleHTTPServer` module has been merged into `http.server` in Python 3.
> The [2to3][2to3] tool will automatically adapt imports when converting your
> sources to Python 3.

But it's still one line command:

{% highlight bash %}
$ python -m http.server
Serving HTTP on 0.0.0.0 port 8000 ...
{% endhighlight %}

Run it with `--help` argument to see detailed options:
{% highlight bash %}
$ python -m http.server --help
{% endhighlight %}


[python_download]: https://www.python.org/downloads/
[py27simpleserver]: https://docs.python.org/2/library/simplehttpserver.html
[py34simpleserver]: https://docs.python.org/3.4/library/http.server.html
[2to3]: https://docs.python.org/2/glossary.html#term-to3
