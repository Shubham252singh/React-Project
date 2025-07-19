import { fireEvent, render , screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/ReduxStore"
import { Provider } from "react-redux"
import { act } from "@testing-library/react" 
import "@testing-library/jest-dom"
import MockData from "../mocks/MockMenuCard.json"
import Header from "../Header"
import Cart from "../Cart"
import { waitFor } from "@testing-library/react"

global.fetch = jest.fn(()=>Promise.resolve({
    json:()=>Promise.resolve(MockData)
}))

it("Should render Restaurant Menu Component",async ()=>{
    await act(()=>{
        render(
        <Provider store = {appStore}>
             <RestaurantMenu />
        </Provider>
    )
    })
    expect(screen.getByRole("heading",{name:"NIC Ice Creams"})).toBeInTheDocument();
})

it("Should render Kulfi Items on click of accordian in Restaurant Menu Component",async ()=>{
    await act(async ()=>{
        render(<Provider store ={appStore}><RestaurantMenu/></Provider>)
    })
    const accordianHeader = screen.getByText("Kulfi (8)");
    fireEvent.click(accordianHeader);
    expect(screen.getByText("Matka Malai Kulfi [pack Of 2]")).toBeInTheDocument();
})

it("Should list 8 items in Kulfi category in Restaurant Menu Component",async ()=>{
    await act(async ()=>{
        render(<BrowserRouter><Provider store ={appStore}><RestaurantMenu/><Header/></Provider></BrowserRouter>)
    })
    const accordianHeader = screen.getByText("Kulfi (8)");
    fireEvent.click(accordianHeader);
    const items=screen.getAllByTestId("itemCategoryTest");

    expect(items.length).toBe(8);
})

it("Should add 1 item to Header Cart on click of Add button in Restaurant Menu Component",async ()=>{
    await act(async ()=>{
        render(<BrowserRouter><Provider store ={appStore}><Header/><RestaurantMenu/></Provider></BrowserRouter>)
    })
    expect(screen.getByText("Cart")).toBeInTheDocument();
    const accordianHeader = screen.getByText("Kulfi (8)");
    fireEvent.click(accordianHeader);
    const items= screen.getAllByRole("button",{name:"ADD +"});
    fireEvent.click(items[3]);
    //screen.debug()
    const cartLink = screen.getByTestId("cartLinkHeader");
    expect(cartLink).toHaveTextContent("Cart 1");
})

it("Should add 2 item to Header Cart on Adding 2 items in Restaurant Menu Component",async ()=>{
    await act(()=>{
        render(
            <BrowserRouter>
            <Provider store ={appStore}>
                <Header></Header>
                <RestaurantMenu/>
            </Provider>
            </BrowserRouter>
        )
    })
    const accordianHeader = screen.getByText("Kulfi (8)");
    fireEvent.click(accordianHeader);
    const addbtn = screen.getAllByRole("button",{name:"ADD +"})
    fireEvent.click(addbtn[0]);
    fireEvent.click(addbtn[1]);
    const cartLink = screen.getByTestId("cartLinkHeader");
    expect(cartLink).toHaveTextContent("Cart 3");
})

it("Should add 1 item to Cart on click of Add button in Restaurant Menu Component",async ()=>{
    await act(async ()=>{
        render(<BrowserRouter><Provider store ={appStore}><Header/><RestaurantMenu/><Cart/></Provider></BrowserRouter>)
    })
    const accordianHeader = screen.getByText("Kulfi (8)");
    fireEvent.click(accordianHeader);
    const items= screen.getAllByRole("button",{name:"ADD +"});
    fireEvent.click(items[4]);
  
    const cartItems = screen.getAllByTestId("cartItemTest");
    expect(cartItems.length).toBe(4);
})

it("Should clear menu item in Restaurant Menu Component",async ()=>{
    await act(async ()=>{
        render(<BrowserRouter><Provider store ={appStore}><Header/><RestaurantMenu/><Cart/></Provider></BrowserRouter>)
    })
    const accordianHeader = screen.getByText("Kulfi (8)");
    fireEvent.click(accordianHeader);
    const items= screen.getAllByRole("button",{name:"ADD +"});
    fireEvent.click(items[5]);
  
    const cartItems = screen.getAllByTestId("cartItemTest");
    expect(cartItems.length).toBe(5);
    const clearBtn =screen.getByRole("button",{name:"Clear Cart"});
    fireEvent.click(clearBtn);
    expect(screen.getByText("Good Food is Always Cooking")).toBeInTheDocument();
})