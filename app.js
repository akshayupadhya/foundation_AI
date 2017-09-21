var program = require('commander');
let fs= require('fs')

 async function readFile (x){
    // console.log("this is",x)
    // let fileData = await readFileAsync(x)
    let fileData = fs.readFileSync('input.txt','utf8')
    .trim()
    .split('\n')
    .map(line=>line.split('\t'))
    .map(i => i[0])
    let count=0;
    let algorithm = fileData[0];
    let nurseryArray=  parseInt(fileData[1]);
    let lizards = fileData[2];
    let trees = fileData.slice(3, (fileData.length - 1)).map(i => i.split(""))
    let treesCoOrdinate = trees.map((i,m)=>{
        let tray=[];
        i.filter((j,n)=>{
            if(j==2) tray.push(n);
        })
        return tray.map(i=>({x:i,y:m}))
                
    }).filter(i=>i.length==1).map(i=>i[0])

    let nursery=[]
    
    for(let i=0; i<= (nurseryArray)-1;i++){

        for(let j=0; j<= (nurseryArray)-1;j++){
            nursery.push({x:i,y:j})
        }
    }
    isTree = (pos) => {
        let len = treesCoOrdinate.length;
        let flag = true
        for (let i = 0; i <= len; i++) {

            if (JSON.stringify(pos) == JSON.stringify(treesCoOrdinate[i])) {
                flag = false
            }
        }
        return flag
    }

    let available= nursery.filter((j)=>isTree(j));


    
    console.log("alg: ",algorithm);
    console.log("nurseryArray: ",nurseryArray)
    console.log("lizards: ",lizards)
    console.log("trees: ",treesCoOrdinate)
    console.log("avalable positions\n",available.length)
    let teritory=[];
    function acquire(pos){
        console.log(pos)
        var uf,df,lf,rf,ddlf,ddrf,dulf,durf;
        let position=pos;
        let taken =(val)=>{
            for(let i=0;i<=nurseryArray-1;i++){
                if(JSON.stringify(available[i])==JSON.stringify(val)){
                    available.splice(i,1);
                }
                (function south (pos){
                    let x = pos.x;
                    let yA = pos.y;
                    let tray = []
                    for (let i = (x + 1); i <= (nurseryArray - 1); i++) {
                        tray.push({
                            x: i,
                            y: yA
                        });
                    }
                    tray.forEach(i=>taken(i));
                })(j);
            }
        }
        (function north (){
            let x = pos.x;
            let yA = pos.y;
            let tray = []
            for (let i = 0; i <= x; i++) {
                //console.log(i)
                tray.push({
                    x: i,
                    y: yA
                });
            }
            tray.forEach(i=>taken(i));
        })()
        ( function west(){
            let xA = pos.x;
            let y = pos.y;
            let tray = []
            for (let i = 0; i <= y; i++) {
                tray.push({
                    x: xA,
                    y: i
                });
            }
            tray.forEach(i => taken(i));
        })();
        (function east(){
            let xA = pos.x;
            let y = pos.y;
            let tray = []
            for (let i = 0; i <= y; i++) {
                tray.push({
                    x: xA,
                    y: i
                });
            }
            tray.forEach(i => taken(i));
        })()
        (function northEast(){
            var xA = pos.x;
            var yA = pos.y;
            var flag = false;
            let tray = [];
            while (!flag) {
                if ((xA >= 0) && (xA <= nurseryArray - 1) && (yA >= 0) && (yA <= nurseryArray - 1)) {
                    xA -= 1;
                    yA += 1;
                    tray.push({
                        x: xA,
                        y: yA
                    })
                } else {
                    flag = true
                }
            }
            if (flag) {
                tray.forEach(i => taken(i));
            }
        })()
        (function southEast(){
            var xA = pos.x;
            var yA = pos.y;
            var flag = false;
            let tray = [];
            while (!flag) {
                if ((xA >= 0) && (xA <= nurseryArray - 1) && (yA >= 0) && (yA <= nurseryArray - 1)) {
                    xA += 1;
                    yA += 1;
                    tray.push({
                        x: xA,
                        y: yA
                    })
                } else {
                    flag = true
                }
            }
            if (flag) {
                tray.forEach(i => taken(i));
            }
        })()
        (function southWest(){
            var xA = pos.x;
            var yA = pos.y;
            var flag = false;
            let tray = [];
            while (!flag) {
                if ((xA >= 0) && (xA <= nurseryArray - 1) && (yA >= 0) && (yA <= nurseryArray - 1)) {
                    xA += 1;
                    yA -= 1;
                    tray.push({
                        x: xA,
                        y: yA
                    })
                } else {
                    flag = true
                }
            }
                    if (flag) {
                     tray.forEach(i => taken(i));
                    }
        })()
        (function northWest(){
            var xA = pos.x;
            var yA = pos.y;
            var flag = false;
            let tray = [];
            while (!flag) {
                if ((xA >= 0) && (xA <= nurseryArray - 1) && (yA >= 0) && (yA <= nurseryArray - 1)) {
                    xA -= 1;
                    yA -= 1;
                    tray.push({
                        x: xA,
                        y: yA
                    })
                } else {
                    flag = true
                }
            }
            if (flag) {
                tray.forEach(i => taken(i));
            }
        })()
        
    }
    var remainingL= parseInt(lizards);
    BFS= ()=>{
        console.log("inside bfs")
       acquiredPos=[]
       for(let i=0;i<=available.length;){
           let 
           var uf, df, lf, rf, ddlf, ddrf, dulf, durf;
           let j= available[i];
           
           if ((remainingL != 0)) {
               let taken = (val) => {
                   for (let i = 0; i <= nurseryArray - 1; i++) {
                       if (JSON.stringify(available[i]) == JSON.stringify(val)) {
                           available.splice(i, 1);
                       }
                   }
               }
           (function northWest(pos) {
                           var xA = pos.x;
                           var yA = pos.y;
                           var flag = false;
                           let tray = [];
                           while (!flag) {
                               if ((xA >= 0) && (xA <= nurseryArray - 1) && (yA >= 0) && (yA <= nurseryArray - 1)) {
                                   xA -= 1;
                                   yA -= 1;
                                   tray.push({
                                       x: xA,
                                       y: yA
                                   })
                               } else {
                                   flag = true
                               }
                           }
                           if (flag) {
                               tray.forEach(i => taken(i));
                           }
                       })(j)
           
           
           
           (function north(pos) {
               let x = pos.x;
               let yA = pos.y;
               let tray = []
               for (let i = 0; i <= x; i++) {
                   //console.log(i)
                   tray.push({
                       x: i,
                       y: yA
                   });
               }
               tray.forEach(i => taken(i));
           })(j)
           (function south(pos) {
               let x = pos.x;
               let yA = pos.y;
               let tray = []
               for (let i = (x + 1); i <= (nurseryArray - 1); i++) {
                   tray.push({
                       x: i,
                       y: yA
                   });
               }
               tray.forEach(i => taken(i));
           })(j);

           (function west(pos) {
               let xA = pos.x;
               let y = pos.y;
               let tray = []
               for (let i = 0; i <= y; i++) {
                   tray.push({
                       x: xA,
                       y: i
                   });
               }
               tray.forEach(i => taken(i));
           })(j);

           (function east(pos) {
               let xA = pos.x;
               let y = pos.y;
               let tray = []
               for (let i = 0; i <= y; i++) {
                   tray.push({
                       x: xA,
                       y: i
                   });
               }
               tray.forEach(i => taken(i));
           })(j)
           (function northEast(pos) {
               var xA = pos.x;
               var yA = pos.y;
               var flag = false;
               let tray = [];
               while (!flag) {
                   if ((xA >= 0) && (xA <= nurseryArray - 1) && (yA >= 0) && (yA <= nurseryArray - 1)) {
                       xA -= 1;
                       yA += 1;
                       tray.push({
                           x: xA,
                           y: yA
                       })
                   } else {
                       flag = true
                   }
               }
               if (flag) {
                   tray.forEach(i => taken(i));
               }
           })(j)

           (function southEast(pos) {
               var xA = pos.x;
               var yA = pos.y;
               var flag = false;
               let tray = [];
               while (!flag) {
                   if ((xA >= 0) && (xA <= nurseryArray - 1) && (yA >= 0) && (yA <= nurseryArray - 1)) {
                       xA += 1;
                       yA += 1;
                       tray.push({
                           x: xA,
                           y: yA
                       })
                   } else {
                       flag = true
                   }
               }
               if (flag) {
                   tray.forEach(i => taken(i));
               }
           })(j)
           (function southWest(pos) {
               var xA = pos.x;
               var yA = pos.y;
               var flag = false;
               let tray = [];
               while (!flag) {
                   if ((xA >= 0) && (xA <= nurseryArray - 1) && (yA >= 0) && (yA <= nurseryArray - 1)) {
                       xA += 1;
                       yA -= 1;
                       tray.push({
                           x: xA,
                           y: yA
                       })
                   } else {
                       flag = true
                   }
               }
               if (flag) {
                   tray.forEach(i => taken(i));
               }
           })(j)
           
               
               console.log("current iteration:", i,"current item:",j,"avalable solutions :",available.length)
                acquiredPos.push(j);
                remainingL-=1;
                ++i;
           }
       }
       //console.log("acquired",acquiredPos)
       )} 
    if(algorithm=="BFS"){
        BFS();
    }}

    program
    .version('0.1.0')
    .arguments('<cmd>')
    .action(function (cmd) {
        cmdValue = cmd;
        readFile( cmd);
    });

program.parse(process.argv);

 if (typeof cmdValue === 'undefined') {
     console.error('enter file name');
     process.exit(1);
 }