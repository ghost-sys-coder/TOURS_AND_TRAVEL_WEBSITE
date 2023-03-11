const Package = require("../models/Package");


//GET all packages
const getAllPackages = async (req, res) => {
    try {
        const packages = await Package.find();

        res.render("packages", {
            packages
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

//GET package controller
const getPackage = async (req, res) => {
    const packageName = req.params.packageName;

    Package.find({}, function (err, foundPackages) {

        if (foundPackages.length === 0) {
            Package.insertMany([
                {
                    title: "3 Day Murchison Falls Wildlife Safari",
                    imgUrl: "/assets/tours-images/3DayMurchisonFallsSafariImage1.jpg",
                    destination: "Murchison Falls",
                    price: 1100,
                    ratings: [
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                    ],
                    description: "This bike trip allows you to get an insight into the lives of the people that live here, the green scenery, and the fresh and cool breezes from Lake Victoria, and also exploring the breathtakingly beautiful Lake Victoria Peninsular through single-track dirt roads and experiencing with stunning views.",
                    age: "1-90",
                    duration: "3 days",
                    imgUrls: [
                        "/assets/packages/murchisonFalls/image1.jpg",
                        "/assets/packages/murchisonFalls/image2.jpg",
                        "/assets/packages/murchisonFalls/image3.jpg",
                        "/assets/packages/murchisonFalls/image4.jpg",
                        "/assets/packages/murchisonFalls/image5.jpg",
                        "/assets/packages/murchisonFalls/image6.jpg",
                        "/assets/packages/murchisonFalls/image7.jpg",
                        "/assets/packages/murchisonFalls/image8.jpg",
                        "/assets/packages/murchisonFalls/image9.jpg",
                        "/assets/packages/murchisonFalls/image10.jpg"
                    ]
                },
                {
                    title: "1 Day Jinja Tour Experience",
                    imgUrl: "/assets/tours-images/jinja1DayTravelImage1.jpg",
                    destination: "Jinja",
                    price: 169.99,
                    ratings: [
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                    ],
                    description: "Jinja is arguably Uganda’s heartbeat, it is a gem of unrivaled beauty, an asset to Uganda of humongous economic potential and a testimony to nature’s benevolence. Host to the World’s famous River Nile to anchoring Uganda’s major power dams hence developing as a well-planned, scenic and tranquil town. Jinja City is of a regional importance and is growing rapidly as a result of having over 80 industries that employ over 13,000 people owing to the presence of 3 Hydropower dams that supply power for both domestic and commercial use.therefore this trip enables you to understand the major pillars of the Uganda like Agriculture in Lugazi town where main cash crops like sugarcane and Tea are grown and processed, Industrialization in Jinja city, thick vegetation of Mabira, and most importantly to the source of the Nile River where L.Victoria meets River Nile.Such a full package at a very good affordable price really no one deserves to miss it. You must either grab it or book it for a friend",
                    age: "4-99, max of 62 per group",
                    duration: "6-8 hours",
                    imgUrls: [
                        "/assets/packages/1DayJinjaExperience/image1.jpg",
                        "/assets/packages/1DayJinjaExperience/image2.jpg",
                        "/assets/packages/1DayJinjaExperience/image3.jpg",
                        "/assets/packages/1DayJinjaExperience/image4.jpg",
                        "/assets/packages/1DayJinjaExperience/image5.jpg",
                        "/assets/packages/1DayJinjaExperience/image6.jpg",
                        "/assets/packages/1DayJinjaExperience/image7.jpg",
                        "/assets/packages/1DayJinjaExperience/image8.jpg"
                    ]
                },
                {
                    title: "2 Days Queen Elizabeth National Park with Cruise",
                    imgUrl: "/assets/tours-images/2DaysQueenElizabethSafariImage1.jpg",
                    destination: "Queen Elizabeth National Park",
                    price: 781.99,
                    ratings: [
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                    ],
                    description: "Discover the rich biodiversity of Uganda during this 3-day excursion to Queen Elizabeth National Game Park. This private tour whisks you away to some of the best locations within this UNESCO World Heritage Site for the most immersive safari experience. There’s no need to worry about a thing during your journey; all meals, accommodation, activities, and admission are included, so you can just sit back and observe the wildlife.",
                    age: "5-90",
                    duration: "2 days",
                    imgUrls: [
                        "/assets/packages/queenElizabeth/image1.jpg",
                        "/assets/packages/queenElizabeth/image2.jpg",
                        "/assets/packages/queenElizabeth/image3.jpg",
                        "/assets/packages/queenElizabeth/image4.jpg",
                        "/assets/packages/queenElizabeth/image5.jpg",
                        "/assets/packages/queenElizabeth/image6.jpg",
                        "/assets/packages/queenElizabeth/image7.jpg",
                        "/assets/packages/queenElizabeth/image8.jpg",
                        "/assets/packages/queenElizabeth/image9.jpg",
                        "/assets/packages/queenElizabeth/image10.jpg",
                        "/assets/packages/queenElizabeth/image11.jpg",
                        "/assets/packages/queenElizabeth/image12.jpg",
                        "/assets/packages/queenElizabeth/image13.jpg",
                    ]
                },
                {
                    title: "2 Days Popular Safari to Lake Mburo National Park",
                    imgUrl: "/assets/tours-images/lakeMburo2DaySafariImage1.jpg",
                    destination: "Lake Mburo National Park",
                    price: 564.99,
                    ratings: [
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star-half-alt"></i>',
                    ],
                    description: "Glimpsing Uganda’s famous wildlife can be tricky for time-limited travelers in the capital. Optimize your time on 2-day tour to Lake Mburo National Park, with round-trip transportation from your Kampala hotel ensuring seamless transfer. Look out for crocodiles, hippos, and leopards as you explore by game drive and boat ride, and avoid hidden costs with meals, accommodation, and entry fees included as per itinerary.",
                    age: "3-90",
                    duration: "2 days",
                    imgUrls: [
                        "/assets/packages/bwindiForest/image1.jpg",
                        "/assets/packages/bwindiForest/image2.jpg",
                        "/assets/packages/bwindiForest/image3.jpg",
                        "/assets/packages/bwindiForest/image4.jpg",
                        "/assets/packages/bwindiForest/image5.jpg",
                        "/assets/packages/bwindiForest/image6.jpg",
                        "/assets/packages/bwindiForest/image7.jpg",
                        "/assets/packages/bwindiForest/image8.jpg",
                        "/assets/packages/bwindiForest/image9.jpg",
                        "/assets/packages/bwindiForest/image10.jpg",
                        "/assets/packages/bwindiForest/image11.jpg",
                        "/assets/packages/bwindiForest/image12.jpg",
                        "/assets/packages/bwindiForest/image13.jpg",
                        "/assets/packages/bwindiForest/image14.jpg",
                        "/assets/packages/bwindiForest/image15.jpg"
                    ]
                },
                {
                    title: "3 Day Tour to Uganda - Gorilla Trekking Bwindi Forest",
                    imgUrl: "/assets/tours-images/3DayGorillaTrekkingImage1.jpg",
                    destination: "Bwindi Forest",
                    price: 1100,
                    ratings: [
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star-half-alt"></i>',
                    ],
                    description: "Venture deep into Uganda’s mist-shrouded jungles for an intimate, face-to-face encounter with the world’s last surviving mountain gorillas. On this multi-day, all-inclusive adventure, you’ll trek alongside a guide through 25,000-year-old rainforests to the remote sanctuary, home of the iconic apes. Tours also include a scenic overnight trip to relaxing Lake Bunyonyi and stopovers in Mbarara and Kayabwe.",
                    age: "10-70",
                    duration: "3 days",
                    imgUrls: [
                        "/assets/packages/bwindiForest/image1.jpg",
                        "/assets/packages/bwindiForest/image2.jpg",
                        "/assets/packages/bwindiForest/image3.jpg",
                        "/assets/packages/bwindiForest/image4.jpg",
                        "/assets/packages/bwindiForest/image5.jpg",
                        "/assets/packages/bwindiForest/image6.jpg",
                        "/assets/packages/bwindiForest/image7.jpg",
                        "/assets/packages/bwindiForest/image8.jpg",
                        "/assets/packages/bwindiForest/image9.jpg",
                        "/assets/packages/bwindiForest/image10.jpg",
                        "/assets/packages/bwindiForest/image11.jpg",
                        "/assets/packages/bwindiForest/image12.jpg",
                        "/assets/packages/bwindiForest/image13.jpg",
                        "/assets/packages/bwindiForest/image14.jpg",
                        "/assets/packages/bwindiForest/image15.jpg",
                        "/assets/packages/bwindiForest/image16.jpg",
                        "/assets/packages/bwindiForest/image17.jpg",
                    ]
                }, 
                {
                    title: "3 Hours Guided Cycling Tour Across Lake Victoria",
                    imgUrl: "/assets/tours-images/lakeVictoriaCyclingGuidedTourImage1.jpg",
                    destination: "Lake Victoria",
                    price: 67,
                    ratings: [
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                    ],
                    description: "This bike trip allows you to get an insight into the lives of the people that live here, the green scenery, and the fresh and cool breezes from Lake Victoria, and also exploring the breathtakingly beautiful Lake Victoria Peninsular through single-track dirt roads and experiencing with stunning views.",
                    age: "10-70",
                    duration: "3 hours",
                    imgUrls: [
                        "/assets/packages/lakeVictoriaCycling/image1.jpg",
                        "/assets/packages/lakeVictoriaCycling/image2.jpg",
                        "/assets/packages/lakeVictoriaCycling/image3.jpg",
                        "/assets/packages/lakeVictoriaCycling/image4.jpg",
                        "/assets/packages/lakeVictoriaCycling/image5.jpg",
                        "/assets/packages/lakeVictoriaCycling/image6.jpg",
                        "/assets/packages/lakeVictoriaCycling/image7.jpg",
                        "/assets/packages/lakeVictoriaCycling/image8.jpg",
                        "/assets/packages/lakeVictoriaCycling/image9.jpg",
                        "/assets/packages/lakeVictoriaCycling/image10.jpg",
                        "/assets/packages/lakeVictoriaCycling/image11.jpg",
                        "/assets/packages/lakeVictoriaCycling/image12.jpg",
                        "/assets/packages/lakeVictoriaCycling/image13.jpg",
                        "/assets/packages/lakeVictoriaCycling/image14.jpg",
                        "/assets/packages/lakeVictoriaCycling/image15.jpg",
                        "/assets/packages/lakeVictoriaCycling/image16.jpg",
                    ]
                }, 
                {
                    title: "Kampala's Best Experience walking tour",
                    imgUrl: "/assets/tours-images/kampalaExperienceImage1.jpg",
                    destination: "Kampala",
                    price: 51.99,
                    ratings: [
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                        '<i class="fas fa-star"></i>',
                    ],
                    description: "Gain an overview of Kampala in just half a day on this comprehensive city walking tour. Be immersed in the capital’s ambiance as you stroll between landmarks such as the Uganda National Mosque and Independence Monument, meet locals and purchase mementos in the Owino and Nakasero Markets, and gain personalized insight into the city directly from your private guide.",
                    age: "10-70",
                    duration: "5 hours",
                    imgUrls: [
                        "/assets/packages/kampalaWalkingTour/image1.jpg",
                        "/assets/packages/kampalaWalkingTour/image2.jpg",
                        "/assets/packages/kampalaWalkingTour/image3.jpg",
                        "/assets/packages/kampalaWalkingTour/image4.jpg",
                        "/assets/packages/kampalaWalkingTour/image5.jpg",
                        "/assets/packages/kampalaWalkingTour/image6.jpg",
                        "/assets/packages/kampalaWalkingTour/image7.jpg",
                        "/assets/packages/kampalaWalkingTour/image9.jpg",
                    ]
                }
            ], function (err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Packages successfully added...")
                }
            })
        } else {
            Package.findOne({ destination: packageName.slice(1) }, function (err, result) {
                if (err) {
                    console.log(err)
                }
                else {
                    res.render("package", {
                        pageTitle: packageName,
                        packageTitle: result.title,
                        packageImages: result.imgUrls,
                        packageRatings: result.ratings,
                        packageDescription: result.description,
                        price: result.price,
                        age: result.age,
                        duration: result.duration,
                        package: foundPackages,
                        packageDestination: result.destination
                    })
                }
            })
        }
    })
}



module.exports = {
    getPackage,
    getAllPackages
}
