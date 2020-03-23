import cloneDeep from '../helperFunctions/cloneDeep';
import getColor from '../helperFunctions/colors';

import {
  ComponentInt,
  ChildInt,
  ApplicationStateInt,
} from '../interfaces/Interfaces';

const appComponent: ComponentInt = {
    id: 1,
    stateful: false,
    classBased: false,
    title: 'App',
    color: '#FF6D00',
    props: [],
    nextPropId: 1,
    position: {
      x: 25,
      y: 25,
      width: 600,
      height: 400,
    },
    childrenArray: [],
    nextChildId: 1,
    focusChildId: 0,
    code: '',
    changed: false
  };
  
  const initialApplicationFocusChild: ChildInt = {
    childId: 0,
    componentName: null,
    position: {
      x: 25,
      y: 25,
      width: 800,
      height: 550,
    },
    childType: null,
    childSort: 0,
    childComponentId: 0,
    color: null,
    htmlElement: null,
    HTMLInfo: null,
  };

export const initialApplicationState: ApplicationStateInt = {
    tutorial: 0,
    imageSource: '',
    totalComponents: 1,
    nextId: 2,
    successOpen: false,
    errorOpen: false,
    focusComponent: appComponent,
    selectableChildren: [],
    ancestors: [],
    initialApplicationFocusChild,
    focusChild: cloneDeep(initialApplicationFocusChild),
    editMode: -1,
    components: [appComponent],
    appDir: '',
    loading: false,
    history: [],
    historyIndex: 0,
    future: []
  };

export const initialComponentState: ComponentInt = {
    id: 0,
    stateful: false,
    classBased: false,
    title: '',
    color: getColor(),
    props: [],
    nextPropId: 1,
    position: {
      x: 25,
      y: 25,
      width: 800,
      height: 550,
    },
    childrenArray: [],
    nextChildId: 1,
    focusChildId: 0,
    code: '',
    changed: false
  };