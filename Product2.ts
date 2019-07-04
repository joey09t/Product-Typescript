import {Product} from './Product';

var proall:Product[]=[
    {proId:1001,proName:"Maggi",proCost:50},
    {proId:1002,proName:"Noodles",proCost:70},
    {proId:1003,proName:"Sandwich",proCost:80}
    ];
   // console.log(proall);
    
    proall.push({proId:1004,proName:"Burger",proCost:60});
    proall.splice(1,1);
 
    let pro=proall.filter(x=>x.proId==1003);
    console.log("Product Found")
    console.log(pro);

    for(let data of proall)
    {
        console.log(data.proId+" "+data.proName+" "+data.proCost);
    }
