import './App.css';
import LikeImage from './components/LikeImage';
import LikeImageHoc from './components/LikeImageHoc';
import LikePost from './components/LikePost';
import LikePostHoc from './components/LikePostHoc';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div>

      <h3>Some Blog</h3>


      <div className='buttons'>
        <Wrapper render={(counter, handleIncreament)=>{
          return <LikeImage likeImageCounter={counter} handleLikeImageCount = {handleIncreament}/>}}/>

        <Wrapper render={(counter, handleIncreament)=>{
          return <LikePost LikePostCounter={counter} handlePostCount = {handleIncreament}/>}}/>
      </div>




      <div className='buttons'>
        <LikeImageHoc/>
        <LikePostHoc/>
      </div>

    </div>
  );
}

export default App;