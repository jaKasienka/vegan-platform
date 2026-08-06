---
layout: default
title: Home
permalink: /home/
body_class: home-hero
---

<div class="wrap">
  <h1>A vegan platform advocating for compassion, sustainability, and freedom for all living beings.</h1>
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
    <article class="card card--highlight">
    <!-- Top image -->
      <img src="{{'/assets/img/farmed_animals.png' | relative_url}}" 
       alt="Animals" 
       class="card-hero">
      <a href="{{ '/petitions/' | relative_url}}">
        <h3 class="card-title">Petition Hub</h3>
      </a>
      <p>Stand up for animals — please sign an active petition today.</p>
      <p>Things can change.</p>
      <p><em>(Petitions updated automatically in real time)</em></p>
      <a class="read-more-btn" href="{{ '/petitions/' | relative_url}}">Go to Petitions</a>
    </article>
    <!-- 2. Normal posts (no duplication now, because GV is a page) -->
    <h2>Latest resources</h2>
    {% for post in site.posts limit:3 %}
    <article class="card">
      <a href="{{ post.url | relative_url }}"><h3>{{ post.title }}</h3></a>
      <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
      <a class="read-more-btn" href="{{ post.url | relative_url }}">Read More</a>
    </article>
    {% endfor %}
  </div>
</div>    

<script src="{{ '/assets/js/petitions.js' | relative_url }}"></script>