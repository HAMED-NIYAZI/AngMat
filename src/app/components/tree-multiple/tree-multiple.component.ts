import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface Tree {
  id: string;
  name: string;
  isChecked: boolean,
  children?: Tree[];
}


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  id: string;
  expandable: boolean;
  name: string;
  isChecked: boolean,
  level: number;
}


let TREE_DATA: Tree[] = [
  {
    id: '1',
    name: 'وزارت بهداشت',
    isChecked: false,
    children: [
      { id: '2', name: 'دانشکده ها', isChecked: false },
      { id: '31', name: 'مراکز بهداشت', isChecked: false },
      {
        id: '541', name: 'بیمارستان های خصوصی ', isChecked: false,
        children: [{
          id: '361', name: 'بیمارستان فیروز گر', isChecked: false,
          children: [
            { id: '90', name: 'بوفه', isChecked: false },
            { id: '907', name: 'تدارکات', isChecked: false },
            { id: '900', name: 'دندان پزشکی', isChecked: false },
            { id: '910', name: 'آزمایشگاه', isChecked: false }
          ]
        }]

      },
    ]
  },
  {
    id: '35',
    name: 'دانشکده های دولتی',
    isChecked: false,
    children: [
      {
        id: '1290',
        name: 'استان تهران', isChecked: false,
        children: [
          { id: '8990', name: 'دانشگاه تهران', isChecked: false },
          { id: '99380', name: ' دانشکده پرستاری', isChecked: false },
        ]
      }, {
        id: '16390',
        name: 'استان گیلان', isChecked: false,
        children: [
          { id: '89690', name: 'خانه بهداشت', isChecked: false },
          {
            id: '9650', name: 'دانشکده ها', isChecked: false, children: [
              { id: '91230', name: 'دانشگاه علوم پزشکی گیلان', isChecked: false }
            ]
          },
        ]
      },
    ]
  },
  {
    id: '1875',
    name: 'اورژانس',
    isChecked: false,
  }
];


/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-tree-multiple',
  templateUrl: './tree-multiple.component.html',
  styleUrls: ['./tree-multiple.component.css']
})


export class TreeMultipleComponent implements OnInit {
  private _transformer = (node: Tree, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      id: node.id,
      name: node.name,
      isChecked: node.isChecked,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
  }


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    this.dataSource.data = TREE_DATA.sort();
    // this.TREE_DATA_Node = TREE_DATA;
  }




  updatePropertyById(id: string, data: Tree[]) {
    data.forEach(e => {

      if (e.id == id) {
        e.isChecked = !e.isChecked;
      }
      if (e.children !== undefined && e.children.length > 0) {
        e.children.forEach(ch => {
          // this.updatePropertyById(id, ch.children);
        });


        for (let i = 0; i < e.children.length; i++) {




        }
      }
      return data;
    });
  }


  onChangeCheckBox(id: string): Tree {

    // let node = this.dataSource.data.find(x => x.id == id);

    // if (node?.id == id) {

    //   let tempDate = node;

    //   let fidedIndex = this.dataSource.data.indexOf(node);
    //   alert('fidedIndex2 : ' + fidedIndex);

    //   this.dataSource.data[fidedIndex].isChecked = !node.isChecked;
    //   alert('dataSource : ' + this.dataSource.data[fidedIndex].id + '----' + this.dataSource.data[fidedIndex].name + '---' + this.dataSource.data[fidedIndex].isChecked);

    //   alert(node.name + '/' + node.isChecked + '/' + node.id);

    //   return node;

    // } else {
      let ee = this.SearchForIdInNodes(<Tree[]>this.dataSource.data, id);
      alert(ee.name);

      return ee;
    // }

  }


  SearchForIdInNodes(Nodes: Tree[], id: string): Tree {


    for (let i = 0; i < Nodes.length; i++) {
      let e = Nodes[i];
      if (e.id == id) {


        let fidedIndex2 = this.dataSource.data.indexOf(e);

        alert('fidedIndex2  SearchForIdInNodes : ' + fidedIndex2);


        this.dataSource.data[fidedIndex2].isChecked = !e.isChecked;

        alert('dataSource  SearchForIdInNodes : ' + this.dataSource.data[fidedIndex2].id + '----' + this.dataSource.data[fidedIndex2].name + '---' + this.dataSource.data[fidedIndex2].isChecked);

        alert(e.name + '/' + e.isChecked + '/' + e.id + 'from SearchForIdInNodes');

        return e;
      }


      
if (e.children) {
        this.SearchForIdInNodes(<Tree[]>e.children, id);
      }
      let t!: Tree;
      return t;


    }

    // Nodes.forEach((e) => {
    //   if (e.id == id) {

    //     e.isChecked = !e.isChecked;

    //     let fidedIndex2 = this.dataSource.data.indexOf(e);

    //     alert('fidedIndex2  SearchForIdInNodes : '+fidedIndex2);


    //     this.dataSource.data[fidedIndex2].isChecked = !e.isChecked;

    //      alert('dataSource  SearchForIdInNodes : '+this.dataSource.data[fidedIndex2].id +'----'+this.dataSource.data[fidedIndex2].name+'---'+this.dataSource.data[fidedIndex2].isChecked);

    //     alert(e.name + '/' + e.isChecked + '/' + e.id +'from SearchForIdInNodes' );

    //     return e;
    //   }

    //   if (e.children) {
    //     this.SearchForIdInNodes(<Tree[]>e.children, id);
    //   }
    //   let t!: Tree;
    //   return t;
    // });

    let t!: Tree;
    return t;
  }

}


