import {instance} from "api/common.api";

export const workerApi = {
    getWorkers() {
        return instance.get('workers')
    }
}