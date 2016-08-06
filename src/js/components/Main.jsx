import React, { Component } from 'react'

export default class Main extends Component {
  
  render() {
    return (
      <div>
        <section class="hero-content"><!--    hero content-->
          <h1 class="hero-title">Turn the music loud!</h1>
        </section>

        <section class="selling-points container clearfix"><!--    selling points-->

          <div class="point column third">
            <span class="ion-music-note"></span>
            <h5 class="point-title">Choose your music</h5>
            <p class="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
          </div>

          <div class="point column third">
            <span class="ion-radio-waves"></span>
            <h5 class="point-title">Unlimited, streaming, ad-free</h5>
            <p class="point-description">No arbitrary limits. No distractions.</p>
          </div>

          <div class="point column third">
            <span class="ion-iphone"></span>
            <h5 class="point-title">Mobile enabled</h5>
            <p class="point-description">Listen to your music on the go. This stream service is available on all mobile platforms.</p>
          </div>
        </section>
      </div>
    )
  }
}
