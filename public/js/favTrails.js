// const searchEl = document.querySelector(".saveTrailBtn");

// searchEl.addEventListener("click", function(event) {
//     event.preventDefault();
    
//     var newTrailSav = {
//       name: $(this).data("trailname"),
//       type: $(this).data("type"),
//       difficulty: $(this).data("difficulty"),
//       description: $(this).data("description"),
//       rating: $(this).data("rating"),
//       city: $(this).data("city"),
//       region: $(this).data("region"),
//       location: $(this).data("location"),
//       url: $(this).data("url"),
//       thumbnail: $(this).data("thumbnail"),
//       length: $(this).data("length"),
//       id: $(this).data("myval"),
//     };
// console.log(newTrailSav)
//   });


const saveTrail = async (event) => {
    event.preventDefault();
    const {
        trailname,
        myval,
        description,
        directions,
        difficulty,
        rating,
        region,
        location,
        city,
        url,
        image,
        length,
    } = event.target.dataset
    // event.target.trailname
    var newTrailSav = {
      name: trailname,
      myval,
      directions,
      difficulty,
      city,
      region,
      description,
      rating,
      location,
      url,
      thumbnail: image,
      length,
    };
    const response = await fetch('/api/favTrails/trails', {
        method: 'POST',
        body: JSON.stringify({ newTrailSav }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/favTrails');
    } else {
        console.log('Failed to save.');
    }
}

const saveBtn = document.querySelector('.saveTrailBtn')

// if(saveBtn){
//     document.querySelector('#trailBg').addEventListener('click', async (e) => {
//         e.preventDefault()
//         if(!e.target.classList.contains('saveTrailBtn')) {
//             return
//         }
//     saveBtn.addEventListener('click', saveTrail);
// }

// if(saveBtn){
//     saveBtn.addEventListener('click', saveTrail);
// }

const deleteBtn = document.querySelector('.deleteTrailBtn')

if(deleteBtn){
    document.querySelector('#favTrail').addEventListener('click', async (e) => {
        e.preventDefault()
        if(!e.target.classList.contains('deleteTrailBtn')) {
            return
        }
        console.log("DELETE")
        const response = await fetch(`/api/favTrails/${e.target.dataset.trailid}`, {
            method: 'DELETE',
        });
    
        if (response.ok) {
            document.location.replace('/favTrails');
        } else {
            console.log('Failed to delete.');
        }
    })
}
