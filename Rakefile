#!/usr/bin/env ruby

require 'html-proofer'

def html_proofer
  puts "HTML Proofer version: #{HTMLProofer::VERSION}"
  HTMLProofer.check_directory("./_site", {
    :allow_hash_href => true,
    :http_status_ignore => [999] # LinkedIn returning 999
  }).run
end

task :test do
  puts "Building site"
  sh "bundle exec jekyll build --config _config.yml,_config_test.yml"
  puts "Running HTML Proofer"
  html_proofer
end

task :serve_local do
  sh "bundle exec jekyll serve --config _config.yml,_config_local.yml"
end
