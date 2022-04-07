import React, {useState} from 'react';
import Text from '../../components/commons/Text';
import Input from '../../components/commons/Input';
import Button from '../../components/commons/Button';
import '../../assets/css/style.css';
import Social from '../../components/commons/Social';

const HomePage = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [loading, setLoading] = useState(false);
    const removeData = () => {
        setLoading(true);
        if(name.lemgth && age.length){
            setTimeout(() =>{
                setLoading(false);
            },5000)
            setName("")
            setAge("");
        } else {
            setLoading(false);
            alert("Vui lòng bạn nhập lại. Chưa có chữ gì !!!");
        }
        
    }
    return (
        <div className="Home">
            {loading ? (
                <h1>Loading...</h1>
            ): (
            <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                    <br/>
                    <br/>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age"/>
                    <h1>Hello  {name} nhé</h1>
                    <h2>Age: {age}</h2>
            </div> 
            )}
            <button onClick={() =>removeData()}> Change </button>
        </div>
    );
};

export default HomePage;