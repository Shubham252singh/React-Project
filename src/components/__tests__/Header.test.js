import Header from "../Header"
import "@testing-library/jest-dom";
import { fireEvent, render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/ReduxStore"
import { Provider } from "react-redux";

describe("Test Cases for Header Component",()=>{
    
    it("Should render a Login button in Header Component",()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const LoginButton = screen.getByRole("button",{name:"Login"});
        expect(LoginButton).toBeInTheDocument();
    })

    it("Should change to Logout on click of login button in Header Component",()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const LoginButton = screen.getByRole("button",{name:"Login"});
        fireEvent.click(LoginButton);
        const LogoutButton = screen.getByRole("button",{name:"Logout"});
        expect(LogoutButton).toBeInTheDocument();
    })
    
    it("Should change back to Login button on double click", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const loginbutton = screen.getByRole("button", { name: "Login" })
        fireEvent.click(loginbutton);
        fireEvent.click(loginbutton);
        const loginBtnAfterDoubleClick = screen.getByRole("button", { name: "Login" });
        expect(loginBtnAfterDoubleClick).toBeInTheDocument()
    })
})