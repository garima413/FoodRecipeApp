import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Axios from 'axios';

function App() {
   

  const [search,setSearch] = useState("Burger");
  const [recipes,setRecipes] = useState([]);

  const APP_ID ="29281e56";
  const APP_KEY ="bc4eed153cbf2cb8b3684ffad9ff1a9f";


  useEffect( () => {
    getRecipes();
    //eslint-disable-next-line
  }, []);
    
  const getRecipes = async () => 
  {
    const response = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    
  
    setRecipes(response.data.hits);
  };


  const onInputChange = (e) =>
  {
    setSearch(e.target.value);
  };

   const onSearchClick = () =>
   {
     getRecipes();
    
   };

  return (
    <div className="App">
            <Header 
                 search={search} 
                 onInputChange={onInputChange}  
                 onSearchClick={onSearchClick}
              />
       <div className="container">
            <Recipes recipes={recipes}/>
       </div>

    </div>
  );
}

export default App;
