import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Observable } from 'rxjs';

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

interface TreeList {
  id: string;
  name: string;
  sortingNumber?: string,
  isChecked: boolean,
  parent?: string;
}


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  id: string;
  expandable: boolean;
  name: string;
  isChecked: boolean,
  level: number;
}


///


let lists: TreeList[] = [
  { id: "1", name: "n1", parent: "2", isChecked: false },
  { id: "2", name: "n2", parent: "", isChecked: false },
  { id: "3", name: "n3", parent: "5", isChecked: false },
  { id: "4", name: "n4", parent: "2", isChecked: false },
  { id: "5", name: "n5", parent: "", isChecked: false },
  { id: "6", name: "n6", parent: "2", isChecked: false },
  { id: "7", name: "n7", parent: "6", isChecked: false },
  { id: "8", name: "n8", parent: "6", isChecked: false }
];

/*
var result = unflatten(items);
document.body.innerHTML = "<pre>" + (JSON.stringify(result, null, " "))
*/
///


let TREE_DATA: Tree[] = [
  {
    id: '1',
    name: 'وزارت بهداشت',
    isChecked: false,
    children: [
      { id: '2', name: 'دانشکده ها', isChecked: true },
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

  dataSource   = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    this.dataSource.data = TREE_DATA.sort();
    // this.TREE_DATA_Node = TREE_DATA;
  }

  onChangeCheckBox(id: string): Tree {
    let element = this.SearchForIdInNodes(<Tree[]>this.dataSource.data, id);
    alert(element?.name);
    
    console.log(this.dataSource.data);
    return element;
  }

  SearchForIdInNodes(Nodes: Tree[], id: string): Tree {
    for (let i = 0; i < Nodes.length; i++) {
      let node = Nodes[i];
      if (node.id == id) {
        node.isChecked = !node.isChecked;
        return node;
      } else if (node.children) {
        let result = this.SearchForIdInNodes(node.children, id);
        if (result) {
          return result;
        }
      }
    }
    let t!: Tree;
    return t;
  }

  // //write a methods that converts list to tree
  // public async Task<List<OrganizationTree>> GetOrganizationTree()
  // {
  //   var data = await organizationRepository.GetAll();
  //   var roots = data.Where(d => d.ParentId == null).ToList();
  //   var datatemp = data.ToList();
  //   datatemp = datatemp.Where(d => d.ParentId != null).ToList();


  //   var listTree = new List<OrganizationTree>();

  //   foreach (var root in roots)
  //   {
  //     var mappedroot = mapper.Map<OrganizationTree>(root);
  //     var children = mapper.Map<List<OrganizationTree>>(datatemp.Where(d => d.ParentId == root.Id).ToList());
  //     listTree.Add(mappedroot);
  //     AddChildren(mappedroot,children);
  //   }

  //  return listTree;
  // }


  //  AddChildren(  mappedroot:Tree[],   children:Tree[]):Tree[]
  //   {

  //     children.ForEach(e=> mappedroot.Children.Add(<Tree>e));

  //             foreach (var item in children)
  //             children.forEach(item =>             {
  //               var mappedrootinside = mapper.Map<OrganizationTree>(item);
  //               var childreninside = mapper.Map<List<OrganizationTree>>(datatemp.Where(d => d.ParentId == item.Id).ToList());

  //               AddChildren(mappedrootinside, childreninside);
  //             });

  //             return listTree;
  //   }

  check(){
    this.dataSource.data[0].isChecked=true;
  }
}


