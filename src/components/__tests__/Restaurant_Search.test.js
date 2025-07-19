import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Restaurant_Mock from "../mocks/RestaurantMock.json";
import { act } from "react";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(Restaurant_Mock);
        }
    })
})

it("Should be able to Search Restaurant name with Ice Cream",async ()=>{
    await act(async ()=>{
        render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    );
    })
    
    const resBeforeSrchClick = screen.getAllByTestId("test-restaurant");
    expect(resBeforeSrchClick.length).toBe(8);
    const srchTextBox = screen.getByPlaceholderText("Search Restaurants");
    expect(srchTextBox).toBeInTheDocument();
    fireEvent.change(srchTextBox,{target:{value:"Ice Cream"}});
    const filterButton = screen.getByRole("button",{name:"Search"});
    fireEvent.click(filterButton);
    expect(srchTextBox).toBeInTheDocument();
    const resAfterSrchClick =screen.getAllByTestId("test-restaurant");
    expect(resAfterSrchClick.length).toBe(2);
})

it("Should be able to filter Resaurant on Top Restaurant button click",async ()=>{
    await act(async ()=>{
        render(
            <BrowserRouter><Body/></BrowserRouter>
        )
    });

    const resBeforeFilter = screen.getAllByTestId("test-restaurant");
    expect(resBeforeFilter.length).toBe(8);
    const topResButton = screen.getByRole("button",{ name : "Top Rated Restaurant Search"});
    expect(topResButton).toBeInTheDocument();
    fireEvent.click(topResButton);
    const resAfterFilter = screen.getAllByTestId("test-restaurant");
    expect(resAfterFilter.length).toBe(6);
})