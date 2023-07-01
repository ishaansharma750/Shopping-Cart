
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function category(passedData){
    var filteredData;
    if(passedData == "all"){
        grid.innerHTML = ''
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((json) => {
            const productsArr = json.map((item) => {
              const randomColor = getRandomColor();
              return { ...item, color: randomColor };
            });
            console.log(productsArr)
            for (let value of json) {
                addElement(grid, value)
            }
        })
    
    }
    else {
        grid.innerHTML = ''
        filteredData = productsArr.filter(function (data) {
            return data.category == passedData;
        });
        // console.log(filteredData)
        for (let value of filteredData) {
            addElement(grid, value)
        }

    }
}




//     // let ans = productsArr.title
//     // console.log(ans);
//   .catch((error) => {
//     console.log('Error:', error);
//   });

async function fetchVideos(passedData) {
    // make api call
    try {
        let response = await fetch('https://fakestoreapi.com/products'); // response is instance of Response class
        let result = await response.json();
        // for (let i = 0; i < result.items.length; i++) {
        //     let video = result.items[i];
        //     let videoStats = await fetchStats(video.id.videoId)
        //     if (videoStats.items.length > 0)
        //         result.items[i].videoStats = videoStats.items[0].statistics;
        //     result.items[i].duration = videoStats.items[0] && videoStats.items[0].contentDetails.duration;
        // }
        // showThumbnails(result.items);
        console.log(result)
    }
    catch (error) {
        console.log("Something went wrong", error);
    }
}

async function category(passedData) {
  var filteredData;
  if (passedData === "all") {
    grid.innerHTML = '';
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      const productsArr = json.map((item) => {
        const randomColor = getRandomColor();
        return { ...item, color: randomColor };
      });
      console.log(productsArr);
      for (let value of json) {
        addElement(grid, value);
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    grid.innerHTML = '';
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      filteredData = productsArr.filter(function (data) {
        return data.category === passedData;
      });
      // console.log(filteredData)
      for (let value of filteredData) {
        addElement(grid, value);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
