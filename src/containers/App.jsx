import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CaruoselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";

const API = "http://localhost:3000/initalState";

const App = () => {
    const initialState = useInitialState(API);

    return (
        <div className="app">
            <Header />
            <Search />

            {
                videos.mylist?.length > 0 && (
                    <Categories title="Mi lista">
                        <Carousel>
                            <CaruoselItem />
                        </Carousel>
                    </Categories>
                )
            }

            <Categories title="Tendencias">
                <Carousel>
                    {
                        videos.trends?.map(item => (
                            <CaruoselItem key={item.id} {...item} />
                        ))
                    }
                </Carousel>
            </Categories>

            <Categories title="Originales de PlayVideo">
                <Carousel>
                    {
                        videos.originals?.map(item => (
                            <CaruoselItem key={item.id} {...item} />
                        ))
                    }
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
};

export default App;