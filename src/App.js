import React, {Component} from 'react';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Jumbo from './components/Jumbo/Jumbo'
import Images from './components/Images/Image';
import ImagePanel from './components/ImagePanel/ImagePanel';

class App extends Component {
    
    state = {
        image: [
            {id: 1, image: "https://dog.ceo/api/img/boxer/n02108089_1.jpg", clicked: false},
            {id: 2, image: "https://dog.ceo/api/img/boxer/n02108089_1003.jpg", clicked: false},
            {id: 3, image: "https://dog.ceo/api/img/boxer/n02108089_10229.jpg", clicked: false},
            {id: 4, image: "https://dog.ceo/api/img/boxer/n02108089_1031.jpg", clicked: false},
            {id: 5, image: "https://dog.ceo/api/img/boxer/n02108089_11122.jpg", clicked: false},
            {id: 6, image: "https://dog.ceo/api/img/boxer/n02108089_122.jpg", clicked: false},
            {id: 7, image: "https://dog.ceo/api/img/boxer/n02108089_117.jpg", clicked: false},
            {id: 8, image: "https://dog.ceo/api/img/boxer/n02108089_13340.jpg", clicked: false},
            {id: 9, image: "https://dog.ceo/api/img/boxer/n02108089_13839.jpg", clicked: false},
            {id: 10, image: "https://dog.ceo/api/img/boxer/n02108089_13526.jpg", clicked: false},
            {id: 11, image: "https://dog.ceo/api/img/boxer/n02108089_15702.jpg", clicked: false},
            {id: 12, image: "https://dog.ceo/api/img/boxer/n02108089_1511.jpg", clicked: false}
        ],
        counter: 0,
        topScore: 0
    };
    
    sortImages = (id, clicked) => {
        
        const imageOrder = this.state.image;
        
        if (clicked) {
            console.log("true");
            imageOrder.forEach((img, index) => {
                // console.log(imageOrder[index].clicked);
                imageOrder[index].clicked = false;
                // console.log(imageOrder[index].clicked);
            });
            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.5),
                topScore: this.state.counter,
                counter: 0
            })
        }
        else {
            console.log("false");
            imageOrder.forEach((image, index) => {
                if (id === image.id) {
                     imageOrder[index].clicked = true;
                    // console.log(imageOrder[index].clicked);
                }
            });
            return this.setState({image: imageOrder.sort(() => Math.random() - 0.5), counter: this.state.counter + 1})
        }
    };
    
    render() {
        return (
            <Wrapper>
                <Header
                    score={this.state.counter}
                    topScore={this.state.topScore}
                />
                <Jumbo/>
                <ImagePanel>
                    {this.state.image.map(image => (
                        <Images
                            key={image.id}
                            sortImages={this.sortImages}
                            id={image.id}
                            src={image.image}
                            clicked={image.clicked}
                        />
                    ))}
                </ImagePanel>
            </Wrapper>
        );
    }
}

export default App;