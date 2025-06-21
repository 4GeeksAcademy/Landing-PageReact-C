const cardsData = [
  {
    title: "Card 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://cdn.pixabay.com/photo/2020/07/14/19/33/alpaca-5405469_1280.jpg",
    link: "#"
  },
  {
    title: "Card 2",
    text: "Sapiente esse necessitatibus neque.",
    image: "https://cdn.pixabay.com/photo/2014/12/17/00/28/red-squirrel-570936_1280.jpg",
    link: "#"
  },
  {
    title: "Card 3",
    text: "Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",
    image: "https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_1280.jpg",
    link: "#"
  },
  {
    title: "Card 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://cdn.pixabay.com/photo/2014/08/27/12/58/emperor-penguins-429128_1280.jpg",
    link: "#"
  },
];


const Card = () => {

    return (<div className="container-fluid py-5 bg-black" data-bs-theme="dark">
      <div className="row g-5 justify-content-center">
        {cardsData.map((card, index) => (
          <div key={index} className="col-11 col-sm-6 col-md-4 col-lg-3 mx-auto">
            <div className="card custom-card-hover h-100">
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href={card.link} className="btn btn-primary mt-auto">Find Out More!</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> )

}
export default Card;





