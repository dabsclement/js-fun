class Episode {
    constructor(title, duration, hasBeenWatched) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = hasBeenWatched;

    }
}
let firstEpisode = new Episode ('Dark Beginning', 45, true);
let secondEpisode = new Episode ('the mystery continue', 45, false );
let thirdEpisode = new Episode ('the unexpected climax', 60, false);

// Create your array
// ========================================================
 let episodes = [firstEpisode, secondEpisode, thirdEpisode];
 episodes.push(firstEpisode, secondEpisode, thirdEpisode, thirdEpisode);
 episodes.pop();
 let numberOfEpisodes = episodes.length;

export {firstEpisode, secondEpisode, thirdEpisode};  
