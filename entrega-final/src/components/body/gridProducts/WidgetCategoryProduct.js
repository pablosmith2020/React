import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React, { useContext } from "react";
import { BrandContext } from "../../BrandContext/BrandContext";

const useStyles = makeStyles({
  root: {
    height: 400,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const WidgetCategoryProduct = () => {
  const { Brands } = useContext(BrandContext);

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  const classes = useStyles();

  return (
    <div>
      <section className="widget ">
        <h3 className="widget-title">Categorias</h3>
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={["root", "root2", "root3"]}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {renderTree(Brands)}
        </TreeView>
      </section>
    </div>
  );
};

export default WidgetCategoryProduct;
