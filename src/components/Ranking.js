import React,{Component} from 'react';
import Loading from "./Loading";
import DataRow from "./DataRow";

class Ranking extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:true,
            data:[],
        };
        //it will be not changeing - dont need in state(rednering)
        this.mainRow=["Pozycja","Zwodnik","Gole"]
        
    }
    //fetch data when component did mount
    componentDidMount() {
        this.fetchData();
    }
    
    
    //fetch data from url
    fetchData=()=>{
        // url with data
        let url = "https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers";
        //fetch settings
        let settings = { 
            method: 'GET', 
            //add Header
            headers: new Headers({
                "X-Mashape-Key":"kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw"
            })
        }
        //download data
        fetch(url,settings)
          .then((response)=>{ 
            //json
                return response.json(); 
                },(error)=>{
                    //write error in console
                    console.log("error:");
                    console.log(error);
                    this.setState({
                        loading:false,
                    });
                }
            )
          .then((result)=>{
            //download data->topscorers
                return result.data.topscorers;
            
            },(error)=>{
                    //write error in console
                    console.log("error:");
                    console.log(error);
                    this.setState({
                        loading:false,
                    });
                }
          ).then((result)=>{
            //set data in state and inform data is downloaded
            this.setState({
                loading:false,
                data:result
            });
          },(error)=>{
                console.log("error:");
                console.log(error);
                this.setState({
                    loading:false,
                });
            });  
    }
    
    //display cells in main row
    displayMainRow=()=>{
        return this.mainRow.map((result,i)=>{
            return(
                    <th key={i}><h7>{result}</h7></th>
        ); 
        })
    }
    //display downloaded data in table
    displayData=()=>{
        if(this.state.data.length>0){
            return this.state.data.map((result,i)=>{
                return <DataRow key={result.identifier} result={result} i={i}/>
            })
        }else{
            //if data is empty or cant be download
            return (
                <tr>
                    <td colSpan={this.mainRow.length} className="fetchError"> 
                        Brak rekordów lub błąd połączenia 
                    </td>
                </tr>);
        }
    }
    render(){
        //if loading is finished
        if(!this.state.loading){
            return(
                <div className="">
                    <header className="container headerSection">
                        <div className="imageContainer">
                            <img src="img/logo.jpg" alt="logo"/>
                        </div>
                        <div className="content">
                            <h2>Top strzelcy Serie A</h2>
                            <h4>sezon 2016/2016</h4>
                        </div>
                    </header>
                    <section className="container mainTable">
                        <table>
                            <thead>
                                <tr>
                                    {this.displayMainRow()}
                                </tr>
                            </thead>
                                <tbody className="dataRows">
                                  {this.displayData()}
                                </tbody>
                        </table>
                    </section>
                    <footer className="footerSection">
                        <div className="container">
                            <h4>powered by PGS</h4>
                        </div>
                    </footer>
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