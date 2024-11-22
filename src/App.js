import './App.css';
import MainBlock from './Components/MainBlock';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';

function App(){
    return(
        <div>
            <h1 className="mainTitle">Что вам необходимо?</h1>
            <div className="main-blocks">
                <MainBlock title="Первый блок" img={img1} text='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>
                <MainBlock title="Второй блок" img={img2} text='Lorem ipsum dolor sit amet, consectetur adipisicing elit?'/>
                <MainBlock title="Третий блок" img={img3} text='Lorem ipsum dolor sit amet, consectetur adipisicing elit!'/>
            </div>
        </div>
    );
}

export default App;