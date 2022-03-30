const packages = [
  { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', missing: false },
  { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', missing: false },
  { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', missing: false },
  { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', missing: false },
  { heavy: true, priority: true, fragile: true, to: 'Brittany', trackingNumber: 'acll145', missing: false },
  { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz', missing: false },
  { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367', missing: false }]

let filteredPackages = []

let missingPackages = []

function drawPackages() {
  let packageTemplate = ''
  for (let i = 0; i < filteredPackages.length; i++) {
    const package = filteredPackages[i];
    packageTemplate +=
      `<div class="col-3 p-2">
    <div class="card align-items-center p-3">
    <div class="box">
    </div>
    <h1>To: ${package.to}</h1>
    <p>Heavy: ${package.heavy} <br> Priority: ${package.priority} <br> Fragile: ${package.fragile} <br> Tracking number: ${package.trackingNumber}</p>
   </div >
  </div > `}
  document.getElementById("packages").innerHTML = packageTemplate
}

// function drawPackages() {
//   let packageTemplate = ''
//   for (let i = 0; i < packages.length; i++) {
//     const package = packages[i];
//     packageTemplate +=
//       `<div class="col-3 p-2">
//     <div class="card align-items-center p-3">
//     <div class="box">
//     </div>
//     <h1>To: ${package.to}</h1>
//     <p>Heavy: ${package.heavy} <br> Priority: ${package.priority} <br> Fragile: ${package.fragile} <br> Tracking number: ${package.trackingNumber}</p>
//    </div >
//   </div > `
//     document.getElementById("packages").innerHTML = packageTemplate
//   }
// }

function missingPackage() {
  filteredPackages = JSON.parse(JSON.stringify(packages))
  const index = Math.floor(Math.random() * (packages.length - 1))
  missingPackages.push(packages[index])
  console.log(missingPackages)
  drawPackages()
}


function filterHeavy() {
  filteredPackages = filteredPackages.filter(package => package.heavy)
  // filteredPackages.push(package)
  drawPackages()
  console.log(filteredPackages)
}


// drawPackages()
missingPackage()