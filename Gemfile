source "https://rubygems.org"

gem "bundler", "~> 2.5"
gem "jekyll", "~> 4.3"
gem "webrick", "~> 1.8"   # needed for local `jekyll serve`
gem "logger"              # silences Ruby 3.5 logger warning

# GitHub Pages–safe plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Optional theme (not used, but harmless if you keep minima installed)
gem "minima", "~> 2.5"

# Windows: faster file watching
gem "wdm", ">= 0.1.0", :platforms => :windows