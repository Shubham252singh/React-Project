import Restaurant_card,{withPromotedLabel} from "../RestaurantCard"
import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Mock_Data from "../mocks/RestaurantCardMock.json"

describe("Test Cases for Restaurant Card Component",()=>{

    it("Should render Resaturant Card with data",()=>{
        render(
            <Restaurant_card resData = {Mock_Data[0]}/>
        )
        const res_name = screen.getByText("Burger King");
        expect(res_name).toBeInTheDocument(); 
    })

     it("Should render Promoted Card with Data",()=>{
        const Promoted_Restaurant = withPromotedLabel(<Restaurant_card/>);
        render(<>
             {Mock_Data[1].avgRating > 4.5?(<Promoted_Restaurant resData = {Mock_Data[1]}/>):<Restaurant_card resData = {Mock_Data[1]}/>}
        </>
        )
        const res_name = screen.getByText(/Promoted/);
        expect(res_name).toBeInTheDocument(); 
    })
})