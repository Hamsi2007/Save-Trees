var Reasons=
[
    "2. Trees gives us shelter",
    "3.Trees gives us medicine",
    "4.Trees gives us wood",
    "5.Trees prevent soil erosion",
    "1.Trees give us oxygen for our survival"
];

var Image=
[
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img1.jpg"
];
i=0;

function next()
{
    if(i>=5)
    {i=0};
    document.getElementById("Image").src=Image[i];
    document.getElementById("Reason").innerHTML=Reasons[i];
    i++;
}