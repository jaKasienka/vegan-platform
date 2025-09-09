---
layout: default
title: Home
permalink: /home/
body_class: home-hero
---

<div class="wrap">
  <h1>A vegan platform advocating for compassion, sustainability, and freedom for all living beings.</h1>
  <h2>Latest resources</h2>
  <div class="grid">
    <!-- 1) Static highlight card (once) -->
    <article class="card card--highlight">
    <!-- Top image -->
      <img src="{{'/assets/img/getting-vegan-hero.jpg' | relative_url}}" 
       alt="Colorful fruits and vegetables" 
       class="card-hero">
      <a href="{{ '/getting-vegan/' | relative_url}}">
        <h3 class="card-title">Getting Vegan: Essentials</h3>
      </a>
      <p>Simple swaps, balanced nutrition, and everyday actions to start strong.</p>
      <a class="read-more-btn" href="{{ '/getting-vegan/' | relative_url}}">Read More</a>
    </article>
    <!-- 2. Normal posts (no duplication now, because GV is a page) -->
    {% for post in site.posts limit:3 %}
    <article class="card">
      <a href="{{ post.url | relative_url }}"><h3>{{ post.title }}</h3></a>
      <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
      <a class="read-more-btn" href="{{ post.url | relative_url }}">Read More</a>
    </article>
    {% endfor %}
  </div>
</div>    