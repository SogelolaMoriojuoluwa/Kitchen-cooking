import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useState, useEffect, useRef } from "react";

function Gallery ({options = {}}) {
const rootRef = useRef(null);
const [img, setImg] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=50")
  .then((response) => response.json())
  .then((result) =>{
    console.log(result)
    setImg(result.recipes)
  })
  .catch((error) => console.error(error));
  }, []);

  useEffect(() =>{
    if (rootRef.current) {
      Fancybox.bind(rootRef.current, "[data-fancybox]", options);
      return () => Fancybox.unbind(rootRef.current);
    }
  }, [rootRef, options])
  

  
  return (
    <>
    <div className='container mt-4 ' ref={rootRef}>
        <div className='row gy-3'>
          {img.map((item) => (
            <div key={item.id} className='col col-lg-3 col-md-4 col-sm-6'>
             
                <a
              href={item.image}
              data-fancybox="gallery"
              data-caption={item.name}
            >
              <img src={item.image} alt={item.name} className="img-thumbnail" />
            </a>
              
          </div>
            ))
          }

        </div>
    </div>
    </>
  )
}

export default Gallery
