const STORAGE_CITIES = 'AG_CITIES'

class gameEngine {
	static CreateGame() {
		// Create Doruk places
		cities[0].marina = new Place(100, PlaceType.Marina, charactersEngine.Create(1000, "Tony", "De Franco", 0))
		cities[0].market = new Place(101, PlaceType.Market, charactersEngine.Create(1001, "Sam", "Krasin", 0))
		cities[0].brothel = new Place(102, PlaceType.Brothel, charactersEngine.Create(1002, "Kushina", "Leti", 1))
		// Create Ostaber places
		cities[1].marina = new Place(110, PlaceType.Marina, charactersEngine.Create(1003, "Renata", "Jotia", 1))
		// Create Gratia places
		cities[2].marina = new Place(120, PlaceType.Marina, charactersEngine.CreateRandom(1004, "Ho", "Lipora"))
		cities[2].brothel = new Place(121, PlaceType.Brothel, charactersEngine.Create(1005, "Harry", "Perry", 0))
		cities[2].police = new Place(122, PlaceType.Police, charactersEngine.Create(1006, "Jason", "Young", 0))
		cities[2].hospital = new Place(123, PlaceType.Hospital, charactersEngine.Create(1007, "Laura", "Jeong", 1))
		// Create Kokrol places
		cities[3].marina = new Place(130, PlaceType.Marina, charactersEngine.Create(1008, "Paolo", "Ferro", 0))
		cities[3].market = new Place(131, PlaceType.Market, charactersEngine.CreateRandom(1009, "Doris", "Dumble"))
		// Create Publaziv places
		cities[4].marina = new Place(140, PlaceType.Marina, charactersEngine.Create(1010, "Gunther", "Lloyd", 0))
		cities[4].blackMarket = new Place(141, PlaceType.BlackMarket, charactersEngine.Create(1011, "Lady", "Fox", 1))
		// Create Lenfor places
		cities[5].marina = new Place(150, PlaceType.Marina, charactersEngine.Create(1012, "Erika", "Terry", 1))
		// Create Fonais places
		cities[6].marina = new Place(160, PlaceType.Marina, charactersEngine.Create(1013, "Henry", "Reigns", 0))
		cities[6].brothel = new Place(161, PlaceType.Brothel, charactersEngine.Create(1014, "Sister", "Kelly", 1))

		Utils.log(cities.length + ' cities generated')

		Utils.log(Utils.rnd(2).toString())
		Utils.log(Utils.rnd(25).toString())
		Utils.log(Utils.rnd(80).toString())
	}
	static SaveGame() {
		window.localStorage.setItem(STORAGE_CITIES, JSON.stringify(cities))
		Utils.log(cities.length + ' cities saved on storage')
	}
	static LoadGame() {
		var _cities = window.localStorage.getItem(STORAGE_CITIES);
		if (_cities !== null) {
			cities = JSON.parse(_cities)
			Utils.log(cities.length + ' cities loaded')
		}
		else {
			Utils.wrn('no cities found on storage')
		}
	}
}