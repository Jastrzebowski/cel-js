import type { CstNode, ICstVisitor, IToken } from "chevrotain";

export interface CelExpressionCstNode extends CstNode {
  name: "celExpression";
  children: CelExpressionCstChildren;
}

export type CelExpressionCstChildren = {
  comparisonExpression: ComparisonExpressionCstNode[];
};

export interface ComparisonExpressionCstNode extends CstNode {
  name: "comparisonExpression";
  children: ComparisonExpressionCstChildren;
}

export type ComparisonExpressionCstChildren = {
  lhs: AtomicExpressionCstNode[];
  comparisonOperator: ComparisonOperatorCstNode[];
  rhs: AtomicExpressionCstNode[];
};

export interface ComparisonOperatorCstNode extends CstNode {
  name: "comparisonOperator";
  children: ComparisonOperatorCstChildren;
}

export type ComparisonOperatorCstChildren = {
  GreaterOrEqualThan?: IToken[];
  LessOrEqualThan?: IToken[];
  GreaterThan?: IToken[];
  LessThan?: IToken[];
};

export interface IdentifierCstNode extends CstNode {
  name: "identifier";
  children: IdentifierCstChildren;
}

export type IdentifierCstChildren = {
  Identifier: (IToken)[];
  Dot?: IToken[];
  OpenBracket?: IToken[];
  StringLiteral?: IToken[];
  CloseBracket?: IToken[];
};

export interface AtomicExpressionCstNode extends CstNode {
  name: "atomicExpression";
  children: AtomicExpressionCstChildren;
}

export type AtomicExpressionCstChildren = {
  Integer?: IToken[];
  identifier?: IdentifierCstNode[];
  ReservedIdentifiers?: IToken[];
};

export interface ICstNodeVisitor<IN, OUT> extends ICstVisitor<IN, OUT> {
  celExpression(children: CelExpressionCstChildren, param?: IN): OUT;
  comparisonExpression(children: ComparisonExpressionCstChildren, param?: IN): OUT;
  comparisonOperator(children: ComparisonOperatorCstChildren, param?: IN): OUT;
  identifier(children: IdentifierCstChildren, param?: IN): OUT;
  atomicExpression(children: AtomicExpressionCstChildren, param?: IN): OUT;
}
