#!/usr/bin/env ruby

require 'html/proofer'

task :test do
  sh "bundle exec jekyll build"
  HTML::Proofer.new("./_site", {
    :href_ignore => ["#"],
    :url_ignore => [/linkedin\.com/],
    #:disable_external => true
  }).run
end
