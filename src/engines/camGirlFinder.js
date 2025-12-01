import {findNode} from 'utils/common';
import {setFileInputData, initSearch, sendReceipt} from 'utils/engines';

const engine = 'camGirlFinder';

async function search({session, search, image, storageIds}) {
  const inputSelector = 'input[name=image]';
  const input = await findNode(inputSelector);

  await setFileInputData(inputSelector, input, image);

  await sendReceipt(storageIds);

  (await findNode('form')).submit();
}

function init() {
  initSearch(search, engine, taskId);
}

init();
