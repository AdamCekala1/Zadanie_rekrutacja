import React,{Component} from 'react';
import Loading from "./Loading";
import DataRow from "./DataRow";
import Header from "./Header";
import Footer from "./Footer";
import {fetchData} from "../actions/fetchDataActions"
import {displayData,displayMainRow} from "../actions/displayActions"

class Ranking extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:true,
            data:[],
        };
       //it \/ will be not changeing - dont need in state(rednering)
        //main row - green one
        this.mainRowContent=["Pozycja","Zwodnik","Gole"];
        //url to fetch data
        this.url = "https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers";
        //header needed to request
        this.header = {
                "X-Mashape-Key":"kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw"
            };
        
    }
    //fetch data when component did mount
    componentDidMount() {
        //fetch data 
        fetchData(this.url,this.header).then(
            (result)=>{
                this.setState({
                    data:result,
                    loading:false
                });
            },(error)=>{
                console.log("fetch error:");
                console.log(error);
                this.setState({
                    loading:false
                });
            }
        );

    };
    displayContent=()=>{
        return(
            <section className="container mainTable">
                <table>
                    <thead>
                        <tr>
                            {displayMainRow(this.mainRowContent)}
                        </tr>
                    </thead>
                        <tbody className="dataRows">
                            {displayData(this.state.data,DataRow)}
                        </tbody>
                </table>
            </section>
            );
    }
    render(){
        //if loading is finished
        if(!this.state.loading){
            return(
                <div className="">
                     <Header />
                    {this.displayContent()}
                    <Footer />
                </div>  
            );
        }
        //if loading is unfinished
        else{
            return <Loading/>
        }
    }
}

export default Ranking;