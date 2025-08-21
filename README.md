# Free Me – Vegan Advocacy Site
*A vegan platform advocating for compassion, sustainability, and freedom for all living beings.*

## Demo
👉 [This site is live on GitHub Pages](https://jakasienka.github.io/vegan-platform/)

<p align="center">
  <img src="assets/img/logo.svg" alt="Free Me Logo" width="200"/>
</p>

## Local Preview
Requires Ruby and Bundler installed.

```bash
gem install jekyll bundler
bundle install
bundle exec jekyll serve
```

Then open: http://localhost:4000

## Colors
- Green: #66CC66
- Blue: #3333FF
- Blue Deep: #333399
- Content: #FAFAFA
- Muted: #888

## Structure
- index.html – Entry page with logo, vertical entry button.
- home.md – Articles page.
- _posts/ – Blog posts.
  - Includes _posts/2025-01-01-sample-do-not-remove.md as a template.
- getting-vegan/index.md - Guide/help to go vegan
- posts/index.html - Search results
- about.md - Purpose, animal movement organizations, and petitions.
- assets/css/style.css – Styles with color variables.
- assets/js/articles.js - Searching Articles.
- assets/js/pillar.js - Interactivity.
- assets/img/ – All images.

## Contributing
We welcome contributions! ✨

Here’s how you can help:

1. **Fork** this repository and clone it locally.

2. Create a new branch for your changes:
   
```bash
git checkout -b my-feature
```

3. Add new posts in the _posts/ folder. 
   - Use the format:
    YYYY-MM-DD-title.md
    
   - Each post should start with YAML front matter:
  
    ```yaml
    ---
    layout: post
    title: "My Vegan Insight"
    ---
    ```

   - For convenience, copy the _posts/2025-01-01-sample-do-not-remove.md template and edit it.

4. Update about.md if you’d like to add organizations, resources, or petitions.
   
5. Keep tone inclusive and compassionate.
   
6. Images go in assets/img/. Use relative paths like:

```html
![alt text](/assets/img/my-photo.jpg)
```

7. Commit and push your changes (see **Commit Style** below):
   
```bash
git commit -m "Add new article on [topic]"
git push origin my-feature
```

8. Push to your fork and open a **Pull Request** on GitHub.

### Commit Style
We use Conventional Commits

- feat: → new feature
- fix: → bug fix
- docs: → documentation only
- style: → formatting only (no logic change)
- chore: → setup / tooling / housekeeping

### Examples:

```bash
feat: add highlighted card for getting vegan guide
fix: correct petition link on about page
docs: update README with setup instructions
style: adjust button spacing on homepage
chore: update Gemfile dependencies
```

👉 Keep commit subjects short (~50 chars), use present tense, and add extra detail in the body if needed.

## License
MIT
By contributing, you agree that your work will be licensed under the MIT License.