recordList = [];
recordIsFetched = false;
window.onload = fetchRecords;
async function fetchRecords() {
    if (!recordIsFetched) {
        const res = await fetch('https://vbarbaresi.opendatasoft.com/api/records/1.0/search/?dataset=atp-rankings&q=&rows=100&sort=-current_rank&facet=current_rank&facet=player_country')
        const data = await res.json()
        try {
            console.log('done');
            recordList = data.records.map(record => {
                return { ...record.fields }
            })
        } catch (err) {
            console.error(err)
        }

        recordIsFetched = true;
        console.log('done3', recordList);
    }
    affectRecord(recordList);
};
function affectRecord(recordList) {

    console.log('done4', recordList);
    recordList.map(({ // destructuration
        player_name,
        player_country,
        current_rank,
        player_points
    }) => createRecord(
        player_name,
        player_country,
        current_rank,
        player_points
    ))
}
console.log('done5', recordList);

//FONCTION QUI PERMET DE COMPLETER LE TABLEAUX
function createRecord(player, country, rank, point) {
    let ligne = document.createElement('tr');
    let cell_player = document.createElement('td');
    let cell_country = document.createElement('td');
    let cell_rank = document.createElement('td');
    let cell_point = document.createElement('td');

    cell_player.textContent = player;
    cell_country.textContent = country;
    cell_rank.textContent = rank;
    cell_point.textContent = point;

    ligne.appendChild(cell_player);
    ligne.appendChild(cell_country);
    ligne.appendChild(cell_rank);
    ligne.appendChild(cell_point);

    let recordTab = document.getElementById('classement');
    recordTab.appendChild(ligne);
    console.log('done6');
};
