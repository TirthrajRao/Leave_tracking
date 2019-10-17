const ip = 'https://leavetracking.raoinformationtechnology.com:9000/';
// const ip = 'http://192.168.1.73:3000/';

const baseUrl = ip;
// const baseMediaUrl = 'http://192.168.1.73/leaveTracking-master/uploads/';
const baseMediaUrl = ip + "/uploads/";
export const config = {
    baseApiUrl: baseUrl,
    baseMediaUrl: baseMediaUrl
}