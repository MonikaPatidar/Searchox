// var searchItems = [
//     {
//       name: "Category 1",
//       results: [
//         {
//           title: "result Title",
//           description: "Optional Description"
//         },
//         {
//           title: "result Title",
//           description: "Optional Description"
//         }
//       ]
//     },
//     {
//       name: "Category 2",
//       results: [
//         {
//           title: "result Title",
//           description: "Optional Description"
//         }
//       ]
//     }
// ];

// $(function(){

//   $('#searchInput').search({
//     apiSettings: {
//         'response': function (e) {
//             var searchTerm = e.urlData.query;

//             var result = searchItems.map(function (cat) { 
              
//                 var items = cat.results.filter(function (item) 
//                 { 
//                   return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//                 });

//                 if(items !== null)
//                 {
//                     var category = {'name' : cat.name};
//                     category.results = items;
//                     return category;
//                 }
//             });    

//             return {'results' : result };
//         }
//     },
//     type: 'category'
//   });
// });