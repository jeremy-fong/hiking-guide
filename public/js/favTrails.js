const saveBtn = document.querySelector('.saveTrailBtn')

if(saveBtn){
    document.querySelector('#trailBg').addEventListener('click', async (e) => {
        e.preventDefault()
        if(!e.target.classList.contains('saveTrailBtn')) {
            return
        }
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
        } = e.target.dataset
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
    })
}


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
