/*
Takes data from server and transforms the same to chart readable format
*/

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export default (data) => {
    const dataArr = [];
    data.list.forEach(function (d) {
        let t = new Date(d.dt_txt);
        let time= (t.getHours() === 0) ? t.getDate() : '';
        let day = `${monthNames[t.getMonth()]}'${t.getDate()} ${t.getHours()}:00`;
    })
    return dataArr;
}
