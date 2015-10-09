#!/usr/bin/env ruby

require 'html/proofer'

def html_proofer
  puts "HTML Proofer version: #{HTML::Proofer::VERSION}"
  HTML::Proofer.new("./_site", {
    :href_ignore => ["#"],
    :url_ignore => [/linkedin\.com/],
    #:disable_external => true
  }).run
end

task :test do
  puts "Building site"
  sh "bundle exec jekyll build --config _config.yml,_config_test.yml"
  puts "Running HTML Proofer"
  html_proofer
end

task :serve do
  sh "bundle exec jekyll serve --config _config.yml,_config_local.yml"
end
