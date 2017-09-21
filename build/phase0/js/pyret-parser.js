define('pyret-base/js/pyret-parser', ['jglr/jglr'],
/** @param {{Grammar : {fromSerializable : !Function}, Nonterm : !Object, Token : !Object, Rule : !Object}} E */
function(E) {
  const Grammar = E.Grammar;
  const Nonterm = E.Nonterm;
  const Token = E.Token;
  const Rule = E.Rule;

  var g_json = {
    "start": "START",
    "name": "PyretGrammar",
    "acceptStates": [
      1
    ],
    "mode": "RNGLR",
    "derivable": {
      "program": [
        "prelude",
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "ε",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt",
        "block",
        "stmt",
        "block_I0_star",
        "block_I0",
        "type-expr",
        "newtype-expr",
        "spy-stmt",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "prelude": [
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "ε",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt"
      ],
      "block": [
        "block_I0_star",
        "ε",
        "block_I0",
        "stmt",
        "type-expr",
        "newtype-expr",
        "spy-stmt",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "prelude_I0_opt": [
        "ε",
        "prelude_I0",
        "provide-stmt"
      ],
      "prelude_I1_opt": [
        "ε",
        "prelude_I1",
        "provide-types-stmt"
      ],
      "prelude_I2_star": [
        "ε",
        "prelude_I2",
        "import-stmt"
      ],
      "prelude_I0": [
        "provide-stmt"
      ],
      "provide-stmt": [],
      "prelude_I1": [
        "provide-types-stmt"
      ],
      "provide-types-stmt": [],
      "prelude_I2": [
        "import-stmt"
      ],
      "import-stmt": [],
      "import-source": [
        "import-special",
        "import-name"
      ],
      "comma-names": [],
      "import-special": [],
      "import-name": [],
      "import-special_I3_star": [
        "ε",
        "import-special_I3"
      ],
      "import-special_I3": [],
      "stmt": [
        "type-expr",
        "newtype-expr",
        "spy-stmt",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "record-ann": [],
      "comma-names_I1_star": [
        "ε",
        "comma-names_I1"
      ],
      "comma-names_I1": [],
      "block_I0_star": [
        "ε",
        "block_I0",
        "stmt",
        "type-expr",
        "newtype-expr",
        "spy-stmt",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "block_I0": [
        "stmt",
        "type-expr",
        "newtype-expr",
        "spy-stmt",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "type-expr": [],
      "newtype-expr": [],
      "spy-stmt": [],
      "let-expr": [],
      "fun-expr": [],
      "data-expr": [],
      "when-expr": [],
      "var-expr": [],
      "rec-expr": [],
      "assign-expr": [],
      "check-test": [
        "binop-expr",
        "expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "check-expr": [],
      "contract-stmt": [],
      "spy-stmt_I1_opt": [
        "ε",
        "spy-stmt_I1",
        "binop-expr",
        "expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "spy-stmt_I3_opt": [
        "ε",
        "spy-stmt_I3",
        "spy-contents",
        "spy-field",
        "id-expr"
      ],
      "spy-stmt_I1": [
        "binop-expr",
        "expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "binop-expr": [
        "expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "spy-stmt_I3": [
        "spy-contents",
        "spy-field",
        "id-expr"
      ],
      "spy-contents": [
        "spy-field",
        "id-expr"
      ],
      "spy-field": [
        "id-expr"
      ],
      "spy-contents_I1_star": [
        "ε",
        "spy-contents_I1"
      ],
      "spy-contents_I1": [],
      "id-expr": [],
      "ty-params": [
        "ty-params_I0_opt",
        "ε",
        "ty-params_I0"
      ],
      "ann": [
        "name-ann",
        "record-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "toplevel-binding": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "binding": [
        "name-binding",
        "tuple-binding"
      ],
      "name-binding": [],
      "tuple-binding": [],
      "tuple-binding_I1_star": [
        "ε",
        "tuple-binding_I1"
      ],
      "tuple-binding_I3_opt": [
        "ε",
        "tuple-binding_I3"
      ],
      "tuple-binding_I5_opt": [
        "ε",
        "tuple-binding_I5"
      ],
      "tuple-binding_I1": [],
      "tuple-binding_I3": [],
      "tuple-binding_I5": [],
      "name-binding_I0_opt": [
        "ε",
        "name-binding_I0"
      ],
      "name-binding_I2_opt": [
        "ε",
        "name-binding_I2"
      ],
      "name-binding_I0": [],
      "name-binding_I2": [],
      "multi-let-expr": [],
      "let-binding": [
        "let-expr",
        "var-expr"
      ],
      "multi-let-expr_I2_star": [
        "ε",
        "multi-let-expr_I2"
      ],
      "multi-let-expr_I3": [],
      "multi-let-expr_I2": [],
      "letrec-expr": [],
      "letrec-expr_I2_star": [
        "ε",
        "letrec-expr_I2"
      ],
      "letrec-expr_I3": [],
      "letrec-expr_I2": [],
      "type-bind": [],
      "newtype-bind": [],
      "type-let-bind": [
        "type-bind",
        "newtype-bind"
      ],
      "type-let-expr": [],
      "type-let-expr_I2_star": [
        "ε",
        "type-let-expr_I2"
      ],
      "type-let-expr_I3": [],
      "type-let-expr_I2": [],
      "contract-stmt_I2": [
        "ann",
        "noparen-arrow-ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "noparen-arrow-ann": [],
      "fun-header": [
        "args"
      ],
      "fun-expr_I3": [],
      "doc-string": [
        "doc-string_I0_opt",
        "ε",
        "doc-string_I0"
      ],
      "where-clause": [
        "where-clause_I0_opt",
        "ε",
        "where-clause_I0"
      ],
      "args": [],
      "return-ann": [
        "return-ann_I0_opt",
        "ε",
        "return-ann_I0"
      ],
      "ty-params_I0_opt": [
        "ε",
        "ty-params_I0"
      ],
      "ty-params_I0": [],
      "ty-params_I0_I0": [],
      "ty-params_I0_I2": [],
      "args_I0": [],
      "args_I1_opt": [
        "ε",
        "args_I1",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "args_I1": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "args_I1_I1_star": [
        "ε",
        "args_I1_I1"
      ],
      "args_I1_I1": [],
      "return-ann_I0_opt": [
        "ε",
        "return-ann_I0"
      ],
      "return-ann_I0": [],
      "doc-string_I0_opt": [
        "ε",
        "doc-string_I0"
      ],
      "doc-string_I0": [],
      "where-clause_I0_opt": [
        "ε",
        "where-clause_I0"
      ],
      "where-clause_I0": [],
      "check-expr_I0": [],
      "check-op": [],
      "check-test_A0_I2_opt": [
        "ε",
        "check-test_A0_I2"
      ],
      "check-test_A0_I2": [],
      "check-test_A0_I2_I1": [],
      "check-op-postfix": [],
      "data-expr_I4_opt": [
        "ε",
        "data-expr_I4",
        "first-data-variant",
        "variant-constructor"
      ],
      "data-expr_I5_star": [
        "ε",
        "data-expr_I5",
        "data-variant"
      ],
      "data-sharing": [
        "data-sharing_I0_opt",
        "ε",
        "data-sharing_I0"
      ],
      "data-expr_I4": [
        "first-data-variant",
        "variant-constructor"
      ],
      "first-data-variant": [
        "variant-constructor"
      ],
      "data-expr_I5": [
        "data-variant"
      ],
      "data-variant": [],
      "variant-constructor": [],
      "variant-members": [],
      "data-with": [
        "data-with_I0_opt",
        "ε",
        "data-with_I0"
      ],
      "variant-members_I1_opt": [
        "ε",
        "variant-members_I1",
        "variant-member",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "variant-members_I1": [
        "variant-member",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "variant-member": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "variant-members_I1_I1_star": [
        "ε",
        "variant-members_I1_I1"
      ],
      "variant-members_I1_I1": [],
      "variant-member_I0_opt": [
        "ε",
        "variant-member_I0"
      ],
      "variant-member_I0": [],
      "data-with_I0_opt": [
        "ε",
        "data-with_I0"
      ],
      "data-with_I0": [],
      "fields": [
        "field"
      ],
      "data-sharing_I0_opt": [
        "ε",
        "data-sharing_I0"
      ],
      "data-sharing_I0": [],
      "when-expr_I2": [],
      "expr": [
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "binop-expr_I1_star": [
        "ε",
        "binop-expr_I1"
      ],
      "binop-expr_I1": [],
      "binop": [],
      "paren-expr": [],
      "prim-expr": [
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "lambda-expr": [],
      "method-expr": [],
      "app-expr": [],
      "obj-expr": [],
      "tuple-expr": [],
      "tuple-get": [],
      "dot-expr": [],
      "template-expr": [],
      "bracket-expr": [],
      "get-bang-expr": [],
      "update-expr": [],
      "extend-expr": [],
      "if-expr": [],
      "if-pipe-expr": [],
      "cases-expr": [],
      "for-expr": [],
      "user-block-expr": [],
      "inst-expr": [],
      "construct-expr": [],
      "table-select": [],
      "table-extend": [],
      "table-filter": [],
      "table-order": [],
      "table-extract": [],
      "table-update": [],
      "table-expr": [],
      "load-table-expr": [],
      "reactor-expr": [],
      "bad-expr": [],
      "paren-expr_I0": [],
      "num-expr": [],
      "frac-expr": [],
      "rfrac-expr": [],
      "bool-expr": [],
      "string-expr": [],
      "lambda-expr_I2": [],
      "method-expr_I2": [],
      "app-args": [],
      "opt-comma-binops": [
        "opt-comma-binops_I0_opt",
        "ε",
        "opt-comma-binops_I0",
        "comma-binops",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "opt-comma-binops_I0_opt": [
        "ε",
        "opt-comma-binops_I0",
        "comma-binops",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "opt-comma-binops_I0": [
        "comma-binops",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "comma-binops": [
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "comma-binops_I1_star": [
        "ε",
        "comma-binops_I1"
      ],
      "comma-binops_I1": [],
      "trailing-opt-comma-binops": [
        "trailing-opt-comma-binops_I0",
        "ε",
        "comma-binops",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "trailing-opt-comma-binops_I0": [
        "ε",
        "comma-binops",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "trailing-opt-comma-binops_I0_A0_I1_opt": [
        "ε",
        "trailing-opt-comma-binops_I0_A0_I1"
      ],
      "trailing-opt-comma-binops_I0_A0_I1": [],
      "inst-expr_I3_star": [
        "ε",
        "inst-expr_I3"
      ],
      "inst-expr_I3": [],
      "tuple-fields": [
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "tuple-fields_I1_star": [
        "ε",
        "tuple-fields_I1"
      ],
      "tuple-fields_I2_opt": [
        "ε",
        "tuple-fields_I2"
      ],
      "tuple-fields_I1": [],
      "tuple-fields_I2": [],
      "obj-fields": [
        "obj-field"
      ],
      "obj-field": [],
      "obj-fields_I1_star": [
        "ε",
        "obj-fields_I1"
      ],
      "obj-fields_I2_opt": [
        "ε",
        "obj-fields_I2"
      ],
      "obj-fields_I1": [],
      "obj-fields_I2": [],
      "key": [],
      "obj-field_A1_I2_opt": [
        "ε",
        "obj-field_A1_I2"
      ],
      "obj-field_A1_I2": [],
      "obj-field_A2_I3": [],
      "field": [],
      "fields_I1_star": [
        "ε",
        "fields_I1"
      ],
      "fields_I2_opt": [
        "ε",
        "fields_I2"
      ],
      "fields_I1": [],
      "fields_I2": [],
      "field_A1_I3": [],
      "construct-modifier": [
        "ε"
      ],
      "table-headers": [
        "table-headers_I0_opt",
        "ε",
        "table-headers_I0",
        "table-header"
      ],
      "table-rows": [
        "table-rows_I0_opt",
        "ε",
        "table-rows_I0",
        "table-row"
      ],
      "table-headers_I0_opt": [
        "ε",
        "table-headers_I0",
        "table-header"
      ],
      "table-headers_I0": [
        "table-header"
      ],
      "table-headers_I0_I0_star": [
        "ε",
        "table-headers_I0_I0",
        "list-table-header"
      ],
      "table-header": [],
      "table-headers_I0_I0": [
        "list-table-header"
      ],
      "list-table-header": [],
      "table-header_I1_opt": [
        "ε",
        "table-header_I1"
      ],
      "table-header_I1": [],
      "table-rows_I0_opt": [
        "ε",
        "table-rows_I0",
        "table-row"
      ],
      "table-rows_I0": [
        "table-row"
      ],
      "table-rows_I0_I0_star": [
        "ε",
        "table-rows_I0_I0",
        "table-row"
      ],
      "table-row": [],
      "table-rows_I0_I0": [
        "table-row"
      ],
      "table-items": [
        "table-items_I0_opt",
        "ε",
        "table-items_I0",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "table-items_I0_opt": [
        "ε",
        "table-items_I0",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "table-items_I0": [
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "table-items_I0_I0_star": [
        "ε",
        "table-items_I0_I0",
        "list-table-item"
      ],
      "table-items_I0_I0": [
        "list-table-item"
      ],
      "list-table-item": [],
      "if-expr_I2": [],
      "if-expr_I4_star": [
        "ε",
        "if-expr_I4",
        "else-if"
      ],
      "if-expr_I5_opt": [
        "ε",
        "if-expr_I5"
      ],
      "if-expr_I4": [
        "else-if"
      ],
      "else-if": [],
      "if-expr_I5": [],
      "if-pipe-expr_I1": [],
      "if-pipe-expr_I2_star": [
        "ε",
        "if-pipe-expr_I2",
        "if-pipe-branch"
      ],
      "if-pipe-expr_I3_opt": [
        "ε",
        "if-pipe-expr_I3"
      ],
      "if-pipe-expr_I2": [
        "if-pipe-branch"
      ],
      "if-pipe-branch": [],
      "if-pipe-expr_I3": [],
      "cases-binding": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "cases-binding_I0_opt": [
        "ε",
        "cases-binding_I0"
      ],
      "cases-binding_I0": [],
      "cases-args": [],
      "cases-args_I1_opt": [
        "ε",
        "cases-args_I1",
        "cases-binding",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "cases-args_I1": [
        "cases-binding",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "cases-args_I1_I1_star": [
        "ε",
        "cases-args_I1_I1"
      ],
      "cases-args_I1_I1": [],
      "cases-expr_I1": [],
      "cases-expr_I5": [],
      "cases-expr_I6_star": [
        "ε",
        "cases-expr_I6",
        "cases-branch"
      ],
      "cases-expr_I7_opt": [
        "ε",
        "cases-expr_I7"
      ],
      "cases-expr_I6": [
        "cases-branch"
      ],
      "cases-branch": [],
      "cases-expr_I7": [],
      "cases-branch_I2_opt": [
        "ε",
        "cases-branch_I2",
        "cases-args"
      ],
      "cases-branch_I2": [
        "cases-args"
      ],
      "for-bind": [],
      "for-expr_I3_opt": [
        "ε",
        "for-expr_I3",
        "for-bind"
      ],
      "for-expr_I6": [],
      "for-expr_I3": [
        "for-bind"
      ],
      "for-expr_I3_I1_star": [
        "ε",
        "for-expr_I3_I1"
      ],
      "for-expr_I3_I1": [],
      "column-order": [],
      "column-order_I1": [],
      "table-select_I2_star": [
        "ε",
        "table-select_I2"
      ],
      "table-select_I2": [],
      "table-filter_I2_opt": [
        "ε",
        "table-filter_I2"
      ],
      "table-filter_I2": [],
      "table-filter_I2_I2_star": [
        "ε",
        "table-filter_I2_I2"
      ],
      "table-filter_I2_I2": [],
      "table-order_I4_star": [
        "ε",
        "table-order_I4"
      ],
      "table-order_I4": [],
      "table-update_I2_opt": [
        "ε",
        "table-update_I2"
      ],
      "table-update_I2": [],
      "table-update_I2_I2_star": [
        "ε",
        "table-update_I2_I2"
      ],
      "table-update_I2_I2": [],
      "table-extend_I2_opt": [
        "ε",
        "table-extend_I2"
      ],
      "table-extend-fields": [
        "table-extend-field"
      ],
      "table-extend_I2": [],
      "table-extend_I2_I2_star": [
        "ε",
        "table-extend_I2_I2"
      ],
      "table-extend_I2_I2": [],
      "table-extend-fields_I0_star": [
        "ε",
        "table-extend-fields_I0",
        "list-table-extend-field"
      ],
      "table-extend-field": [],
      "table-extend-fields_I2_opt": [
        "ε",
        "table-extend-fields_I2"
      ],
      "table-extend-fields_I0": [
        "list-table-extend-field"
      ],
      "list-table-extend-field": [],
      "table-extend-fields_I2": [],
      "table-extend-field_A0_I1_opt": [
        "ε",
        "table-extend-field_A0_I1"
      ],
      "table-extend-field_A0_I1": [],
      "table-extend-field_A1_I1_opt": [
        "ε",
        "table-extend-field_A1_I1"
      ],
      "table-extend-field_A1_I1": [],
      "load-table-expr_I3_opt": [
        "ε",
        "load-table-expr_I3",
        "load-table-specs",
        "load-table-spec"
      ],
      "load-table-expr_I3": [
        "load-table-specs",
        "load-table-spec"
      ],
      "load-table-specs": [
        "load-table-spec"
      ],
      "load-table-specs_I0_star": [
        "ε",
        "load-table-specs_I0",
        "load-table-spec"
      ],
      "load-table-spec": [],
      "load-table-specs_I0": [
        "load-table-spec"
      ],
      "name-ann": [],
      "arrow-ann": [],
      "app-ann": [],
      "pred-ann": [],
      "dot-ann": [],
      "tuple-ann": [],
      "comma-ann-field": [
        "ann-field"
      ],
      "ann-field": [],
      "comma-ann-field_I1_star": [
        "ε",
        "comma-ann-field_I1"
      ],
      "comma-ann-field_I1": [],
      "trailing-opt-comma-ann-field": [
        "trailing-opt-comma-ann-field_I0",
        "ε",
        "comma-ann-field",
        "ann-field"
      ],
      "trailing-opt-comma-ann-field_I0": [
        "ε",
        "comma-ann-field",
        "ann-field"
      ],
      "trailing-opt-comma-ann-field_I0_A0_I1_opt": [
        "ε",
        "trailing-opt-comma-ann-field_I0_A0_I1"
      ],
      "trailing-opt-comma-ann-field_I0_A0_I1": [],
      "tuple-ann_I2_star": [
        "ε",
        "tuple-ann_I2"
      ],
      "tuple-ann_I3_opt": [
        "ε",
        "tuple-ann_I3"
      ],
      "tuple-ann_I2": [],
      "tuple-ann_I3": [],
      "noparen-arrow-ann_I0_opt": [
        "ε",
        "noparen-arrow-ann_I0",
        "arrow-ann-args",
        "comma-anns",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "noparen-arrow-ann_I0": [
        "arrow-ann-args",
        "comma-anns",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "arrow-ann-args": [
        "comma-anns",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "comma-anns": [
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "arrow-ann-args_A1_I0": [],
      "arrow-ann_I0": [],
      "arrow-ann_I1_opt": [
        "ε",
        "arrow-ann_I1",
        "arrow-ann-args",
        "ann",
        "comma-anns",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "arrow-ann_I1": [
        "arrow-ann-args",
        "comma-anns",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "app-ann_I0": [
        "name-ann",
        "dot-ann"
      ],
      "comma-anns_I1_star": [
        "ε",
        "comma-anns_I1"
      ],
      "comma-anns_I1": [],
      "pred-ann_I2": [],
      "START": [
        "program",
        "ε",
        "prelude",
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt",
        "block",
        "stmt",
        "block_I0_star",
        "block_I0",
        "type-expr",
        "newtype-expr",
        "spy-stmt",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ]
    },
    "rulesByOldId": {
      "0": {
        "name": "program",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "1": {
        "name": "prelude",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "2": {
        "name": "prelude_I0_opt",
        "position": 0,
        "symbols": []
      },
      "3": {
        "name": "prelude_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0"
          }
        ]
      },
      "4": {
        "name": "prelude_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-stmt"
          }
        ]
      },
      "5": {
        "name": "prelude_I1_opt",
        "position": 0,
        "symbols": []
      },
      "6": {
        "name": "prelude_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I1"
          }
        ]
      },
      "7": {
        "name": "prelude_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-types-stmt"
          }
        ]
      },
      "8": {
        "name": "prelude_I2_star",
        "position": 0,
        "symbols": []
      },
      "9": {
        "name": "prelude_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2"
          }
        ]
      },
      "10": {
        "name": "prelude_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-stmt"
          }
        ]
      },
      "11": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "INCLUDE"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "12": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "13": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "14": {
        "name": "import-source",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special"
          }
        ]
      },
      "15": {
        "name": "import-source",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-name"
          }
        ]
      },
      "16": {
        "name": "import-special",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "17": {
        "name": "import-special_I3_star",
        "position": 0,
        "symbols": []
      },
      "18": {
        "name": "import-special_I3_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3"
          }
        ]
      },
      "19": {
        "name": "import-special_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "20": {
        "name": "import-name",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "21": {
        "name": "provide-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Nonterm",
            "name": "stmt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "22": {
        "name": "provide-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "23": {
        "name": "provide-types-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "24": {
        "name": "provide-types-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "25": {
        "name": "comma-names",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          }
        ]
      },
      "26": {
        "name": "comma-names_I1_star",
        "position": 0,
        "symbols": []
      },
      "27": {
        "name": "comma-names_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1"
          }
        ]
      },
      "28": {
        "name": "comma-names_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "29": {
        "name": "block",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          }
        ]
      },
      "30": {
        "name": "block_I0_star",
        "position": 0,
        "symbols": []
      },
      "31": {
        "name": "block_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "block_I0"
          }
        ]
      },
      "32": {
        "name": "block_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "stmt"
          }
        ]
      },
      "33": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-expr"
          }
        ]
      },
      "34": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-expr"
          }
        ]
      },
      "35": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-stmt"
          }
        ]
      },
      "36": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "37": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fun-expr"
          }
        ]
      },
      "38": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr"
          }
        ]
      },
      "39": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "when-expr"
          }
        ]
      },
      "40": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "41": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rec-expr"
          }
        ]
      },
      "42": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "assign-expr"
          }
        ]
      },
      "43": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test"
          }
        ]
      },
      "44": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr"
          }
        ]
      },
      "45": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "contract-stmt"
          }
        ]
      },
      "46": {
        "name": "spy-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SPY"
          },
          {
            "type": "Nonterm",
            "name": "spy-stmt_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "spy-stmt_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "47": {
        "name": "spy-stmt_I1_opt",
        "position": 0,
        "symbols": []
      },
      "48": {
        "name": "spy-stmt_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-stmt_I1"
          }
        ]
      },
      "49": {
        "name": "spy-stmt_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "50": {
        "name": "spy-stmt_I3_opt",
        "position": 0,
        "symbols": []
      },
      "51": {
        "name": "spy-stmt_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-stmt_I3"
          }
        ]
      },
      "52": {
        "name": "spy-stmt_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-contents"
          }
        ]
      },
      "53": {
        "name": "spy-contents",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-field"
          },
          {
            "type": "Nonterm",
            "name": "spy-contents_I1_star"
          }
        ]
      },
      "54": {
        "name": "spy-contents_I1_star",
        "position": 0,
        "symbols": []
      },
      "55": {
        "name": "spy-contents_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-contents_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "spy-contents_I1"
          }
        ]
      },
      "56": {
        "name": "spy-contents_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "spy-field"
          }
        ]
      },
      "57": {
        "name": "spy-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "58": {
        "name": "spy-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "59": {
        "name": "type-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "60": {
        "name": "newtype-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "61": {
        "name": "let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "62": {
        "name": "binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "63": {
        "name": "binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding"
          }
        ]
      },
      "64": {
        "name": "tuple-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5_opt"
          }
        ]
      },
      "65": {
        "name": "tuple-binding_I1_star",
        "position": 0,
        "symbols": []
      },
      "66": {
        "name": "tuple-binding_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1"
          }
        ]
      },
      "67": {
        "name": "tuple-binding_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "68": {
        "name": "tuple-binding_I3_opt",
        "position": 0,
        "symbols": []
      },
      "69": {
        "name": "tuple-binding_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3"
          }
        ]
      },
      "70": {
        "name": "tuple-binding_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "71": {
        "name": "tuple-binding_I5_opt",
        "position": 0,
        "symbols": []
      },
      "72": {
        "name": "tuple-binding_I5_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5"
          }
        ]
      },
      "73": {
        "name": "tuple-binding_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "74": {
        "name": "name-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "name-binding_I2_opt"
          }
        ]
      },
      "75": {
        "name": "name-binding_I0_opt",
        "position": 0,
        "symbols": []
      },
      "76": {
        "name": "name-binding_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0"
          }
        ]
      },
      "77": {
        "name": "name-binding_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SHADOW"
          }
        ]
      },
      "78": {
        "name": "name-binding_I2_opt",
        "position": 0,
        "symbols": []
      },
      "79": {
        "name": "name-binding_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I2"
          }
        ]
      },
      "80": {
        "name": "name-binding_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "81": {
        "name": "toplevel-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "82": {
        "name": "multi-let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LET"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "83": {
        "name": "multi-let-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "84": {
        "name": "multi-let-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2"
          }
        ]
      },
      "85": {
        "name": "multi-let-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          }
        ]
      },
      "86": {
        "name": "multi-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "87": {
        "name": "multi-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "88": {
        "name": "let-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "89": {
        "name": "let-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "90": {
        "name": "letrec-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LETREC"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "91": {
        "name": "letrec-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "92": {
        "name": "letrec-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2"
          }
        ]
      },
      "93": {
        "name": "letrec-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "94": {
        "name": "letrec-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "95": {
        "name": "letrec-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "96": {
        "name": "type-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "97": {
        "name": "newtype-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "98": {
        "name": "type-let-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-bind"
          }
        ]
      },
      "99": {
        "name": "type-let-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-bind"
          }
        ]
      },
      "100": {
        "name": "type-let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE-LET"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "101": {
        "name": "type-let-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "102": {
        "name": "type-let-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2"
          }
        ]
      },
      "103": {
        "name": "type-let-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          }
        ]
      },
      "104": {
        "name": "type-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "105": {
        "name": "type-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "106": {
        "name": "contract-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "contract-stmt_I2"
          }
        ]
      },
      "107": {
        "name": "contract-stmt_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "108": {
        "name": "contract-stmt_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann"
          }
        ]
      },
      "109": {
        "name": "fun-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FUN"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "fun-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "110": {
        "name": "fun-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "111": {
        "name": "fun-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "112": {
        "name": "fun-header",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "113": {
        "name": "ty-params",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_opt"
          }
        ]
      },
      "114": {
        "name": "ty-params_I0_opt",
        "position": 0,
        "symbols": []
      },
      "115": {
        "name": "ty-params_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0"
          }
        ]
      },
      "116": {
        "name": "ty-params_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I0"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I2"
          }
        ]
      },
      "117": {
        "name": "ty-params_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LANGLE"
          }
        ]
      },
      "118": {
        "name": "ty-params_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "119": {
        "name": "ty-params_I0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "120": {
        "name": "ty-params_I0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "121": {
        "name": "args",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I0"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "122": {
        "name": "args_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "123": {
        "name": "args_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "124": {
        "name": "args_I1_opt",
        "position": 0,
        "symbols": []
      },
      "125": {
        "name": "args_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1"
          }
        ]
      },
      "126": {
        "name": "args_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          }
        ]
      },
      "127": {
        "name": "args_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "128": {
        "name": "args_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1"
          }
        ]
      },
      "129": {
        "name": "args_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "130": {
        "name": "return-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0_opt"
          }
        ]
      },
      "131": {
        "name": "return-ann_I0_opt",
        "position": 0,
        "symbols": []
      },
      "132": {
        "name": "return-ann_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0"
          }
        ]
      },
      "133": {
        "name": "return-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "134": {
        "name": "doc-string",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0_opt"
          }
        ]
      },
      "135": {
        "name": "doc-string_I0_opt",
        "position": 0,
        "symbols": []
      },
      "136": {
        "name": "doc-string_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0"
          }
        ]
      },
      "137": {
        "name": "doc-string_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DOC"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "138": {
        "name": "where-clause",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0_opt"
          }
        ]
      },
      "139": {
        "name": "where-clause_I0_opt",
        "position": 0,
        "symbols": []
      },
      "140": {
        "name": "where-clause_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0"
          }
        ]
      },
      "141": {
        "name": "where-clause_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "142": {
        "name": "check-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "143": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECK"
          }
        ]
      },
      "144": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLES"
          }
        ]
      },
      "145": {
        "name": "check-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "146": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECKCOLON"
          }
        ]
      },
      "147": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLESCOLON"
          }
        ]
      },
      "148": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_opt"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "149": {
        "name": "check-test_A0_I2_opt",
        "position": 0,
        "symbols": []
      },
      "150": {
        "name": "check-test_A0_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2"
          }
        ]
      },
      "151": {
        "name": "check-test_A0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_I1"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "152": {
        "name": "check-test_A0_I2_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "153": {
        "name": "check-test_A0_I2_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "154": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op-postfix"
          }
        ]
      },
      "155": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "156": {
        "name": "data-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DATA"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I4_opt"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-sharing"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "157": {
        "name": "data-expr_I4_opt",
        "position": 0,
        "symbols": []
      },
      "158": {
        "name": "data-expr_I4_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I4"
          }
        ]
      },
      "159": {
        "name": "data-expr_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "first-data-variant"
          }
        ]
      },
      "160": {
        "name": "data-expr_I5_star",
        "position": 0,
        "symbols": []
      },
      "161": {
        "name": "data-expr_I5_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5"
          }
        ]
      },
      "162": {
        "name": "data-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-variant"
          }
        ]
      },
      "163": {
        "name": "variant-constructor",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "variant-members"
          }
        ]
      },
      "164": {
        "name": "first-data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "165": {
        "name": "first-data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "166": {
        "name": "data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "167": {
        "name": "data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "168": {
        "name": "variant-members",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "169": {
        "name": "variant-members_I1_opt",
        "position": 0,
        "symbols": []
      },
      "170": {
        "name": "variant-members_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1"
          }
        ]
      },
      "171": {
        "name": "variant-members_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          }
        ]
      },
      "172": {
        "name": "variant-members_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "173": {
        "name": "variant-members_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1"
          }
        ]
      },
      "174": {
        "name": "variant-members_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "variant-member"
          }
        ]
      },
      "175": {
        "name": "variant-member",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "176": {
        "name": "variant-member_I0_opt",
        "position": 0,
        "symbols": []
      },
      "177": {
        "name": "variant-member_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0"
          }
        ]
      },
      "178": {
        "name": "variant-member_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "179": {
        "name": "data-with",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0_opt"
          }
        ]
      },
      "180": {
        "name": "data-with_I0_opt",
        "position": 0,
        "symbols": []
      },
      "181": {
        "name": "data-with_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0"
          }
        ]
      },
      "182": {
        "name": "data-with_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WITH"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "183": {
        "name": "data-sharing",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0_opt"
          }
        ]
      },
      "184": {
        "name": "data-sharing_I0_opt",
        "position": 0,
        "symbols": []
      },
      "185": {
        "name": "data-sharing_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0"
          }
        ]
      },
      "186": {
        "name": "data-sharing_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SHARING"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "187": {
        "name": "var-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "VAR"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "188": {
        "name": "rec-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REC"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "189": {
        "name": "assign-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONEQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "190": {
        "name": "when-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WHEN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "when-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "191": {
        "name": "when-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "192": {
        "name": "when-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "193": {
        "name": "binop-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "194": {
        "name": "binop-expr_I1_star",
        "position": 0,
        "symbols": []
      },
      "195": {
        "name": "binop-expr_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1"
          }
        ]
      },
      "196": {
        "name": "binop-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "197": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PLUS"
          }
        ]
      },
      "198": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DASH"
          }
        ]
      },
      "199": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "200": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SLASH"
          }
        ]
      },
      "201": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LEQ"
          }
        ]
      },
      "202": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GEQ"
          }
        ]
      },
      "203": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALEQUAL"
          }
        ]
      },
      "204": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SPACESHIP"
          }
        ]
      },
      "205": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALTILDE"
          }
        ]
      },
      "206": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEQ"
          }
        ]
      },
      "207": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "208": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "209": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "AND"
          }
        ]
      },
      "210": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "OR"
          }
        ]
      },
      "211": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CARET"
          }
        ]
      },
      "212": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IS"
          }
        ]
      },
      "213": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALEQUAL"
          }
        ]
      },
      "214": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALTILDE"
          }
        ]
      },
      "215": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISSPACESHIP"
          }
        ]
      },
      "216": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISROUGHLY"
          }
        ]
      },
      "217": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOT"
          }
        ]
      },
      "218": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALEQUAL"
          }
        ]
      },
      "219": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALTILDE"
          }
        ]
      },
      "220": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTSPACESHIP"
          }
        ]
      },
      "221": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISES"
          }
        ]
      },
      "222": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESOTHER"
          }
        ]
      },
      "223": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIES"
          }
        ]
      },
      "224": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIESNOT"
          }
        ]
      },
      "225": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESSATISFIES"
          }
        ]
      },
      "226": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESVIOLATES"
          }
        ]
      },
      "227": {
        "name": "check-op-postfix",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESNOT"
          }
        ]
      },
      "228": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr"
          }
        ]
      },
      "229": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "230": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prim-expr"
          }
        ]
      },
      "231": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "lambda-expr"
          }
        ]
      },
      "232": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "method-expr"
          }
        ]
      },
      "233": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-expr"
          }
        ]
      },
      "234": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-expr"
          }
        ]
      },
      "235": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-expr"
          }
        ]
      },
      "236": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-get"
          }
        ]
      },
      "237": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-expr"
          }
        ]
      },
      "238": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "template-expr"
          }
        ]
      },
      "239": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bracket-expr"
          }
        ]
      },
      "240": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "get-bang-expr"
          }
        ]
      },
      "241": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "update-expr"
          }
        ]
      },
      "242": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "extend-expr"
          }
        ]
      },
      "243": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr"
          }
        ]
      },
      "244": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr"
          }
        ]
      },
      "245": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr"
          }
        ]
      },
      "246": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr"
          }
        ]
      },
      "247": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "user-block-expr"
          }
        ]
      },
      "248": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr"
          }
        ]
      },
      "249": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr"
          }
        ]
      },
      "250": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr"
          }
        ]
      },
      "251": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr"
          }
        ]
      },
      "252": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr"
          }
        ]
      },
      "253": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select"
          }
        ]
      },
      "254": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend"
          }
        ]
      },
      "255": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter"
          }
        ]
      },
      "256": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order"
          }
        ]
      },
      "257": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extract"
          }
        ]
      },
      "258": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update"
          }
        ]
      },
      "259": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-expr"
          }
        ]
      },
      "260": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr"
          }
        ]
      },
      "261": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-expr"
          }
        ]
      },
      "262": {
        "name": "template-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DOTDOTDOT"
          }
        ]
      },
      "263": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNTERMINATED-STRING"
          }
        ]
      },
      "264": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNTERMINATED-BLOCK-COMMENT"
          }
        ]
      },
      "265": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAD-OPER"
          }
        ]
      },
      "266": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAD-NUMBER"
          }
        ]
      },
      "267": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNKNOWN"
          }
        ]
      },
      "268": {
        "name": "paren-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "269": {
        "name": "paren-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "270": {
        "name": "paren-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "271": {
        "name": "id-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "272": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "num-expr"
          }
        ]
      },
      "273": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "frac-expr"
          }
        ]
      },
      "274": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rfrac-expr"
          }
        ]
      },
      "275": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bool-expr"
          }
        ]
      },
      "276": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "string-expr"
          }
        ]
      },
      "277": {
        "name": "num-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NUMBER"
          }
        ]
      },
      "278": {
        "name": "frac-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RATIONAL"
          }
        ]
      },
      "279": {
        "name": "rfrac-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ROUGHRATIONAL"
          }
        ]
      },
      "280": {
        "name": "bool-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TRUE"
          }
        ]
      },
      "281": {
        "name": "bool-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FALSE"
          }
        ]
      },
      "282": {
        "name": "string-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "283": {
        "name": "lambda-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LAM"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "284": {
        "name": "lambda-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "285": {
        "name": "lambda-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "286": {
        "name": "lambda-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "287": {
        "name": "method-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "method-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "288": {
        "name": "method-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "289": {
        "name": "method-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "290": {
        "name": "app-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "app-args"
          }
        ]
      },
      "291": {
        "name": "app-args",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "292": {
        "name": "opt-comma-binops",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_opt"
          }
        ]
      },
      "293": {
        "name": "opt-comma-binops_I0_opt",
        "position": 0,
        "symbols": []
      },
      "294": {
        "name": "opt-comma-binops_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0"
          }
        ]
      },
      "295": {
        "name": "opt-comma-binops_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops"
          }
        ]
      },
      "296": {
        "name": "comma-binops",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "comma-binops_I1_star"
          }
        ]
      },
      "297": {
        "name": "comma-binops_I1_star",
        "position": 0,
        "symbols": []
      },
      "298": {
        "name": "comma-binops_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-binops_I1"
          }
        ]
      },
      "299": {
        "name": "comma-binops_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "300": {
        "name": "trailing-opt-comma-binops",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0"
          }
        ]
      },
      "301": {
        "name": "trailing-opt-comma-binops_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0_A0_I1_opt"
          }
        ]
      },
      "302": {
        "name": "trailing-opt-comma-binops_I0_A0_I1_opt",
        "position": 0,
        "symbols": []
      },
      "303": {
        "name": "trailing-opt-comma-binops_I0_A0_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0_A0_I1"
          }
        ]
      },
      "304": {
        "name": "trailing-opt-comma-binops_I0_A0_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "305": {
        "name": "trailing-opt-comma-binops_I0",
        "position": 0,
        "symbols": []
      },
      "306": {
        "name": "inst-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "307": {
        "name": "inst-expr_I3_star",
        "position": 0,
        "symbols": []
      },
      "308": {
        "name": "inst-expr_I3_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3"
          }
        ]
      },
      "309": {
        "name": "inst-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "310": {
        "name": "tuple-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "311": {
        "name": "tuple-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "312": {
        "name": "tuple-fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "313": {
        "name": "tuple-fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1"
          }
        ]
      },
      "314": {
        "name": "tuple-fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "315": {
        "name": "tuple-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "316": {
        "name": "tuple-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2"
          }
        ]
      },
      "317": {
        "name": "tuple-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "318": {
        "name": "tuple-get",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "NUMBER"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "319": {
        "name": "obj-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "320": {
        "name": "obj-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "321": {
        "name": "obj-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "322": {
        "name": "obj-fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "323": {
        "name": "obj-fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1"
          }
        ]
      },
      "324": {
        "name": "obj-fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "obj-field"
          }
        ]
      },
      "325": {
        "name": "obj-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "326": {
        "name": "obj-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I2"
          }
        ]
      },
      "327": {
        "name": "obj-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "328": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "329": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "330": {
        "name": "obj-field_A1_I2_opt",
        "position": 0,
        "symbols": []
      },
      "331": {
        "name": "obj-field_A1_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2"
          }
        ]
      },
      "332": {
        "name": "obj-field_A1_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "333": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A2_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "334": {
        "name": "obj-field_A2_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "335": {
        "name": "obj-field_A2_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "336": {
        "name": "fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "337": {
        "name": "fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "338": {
        "name": "fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1"
          }
        ]
      },
      "339": {
        "name": "fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "field"
          }
        ]
      },
      "340": {
        "name": "fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "341": {
        "name": "fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I2"
          }
        ]
      },
      "342": {
        "name": "fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "343": {
        "name": "field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "344": {
        "name": "field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "field_A1_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "345": {
        "name": "field_A1_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "346": {
        "name": "field_A1_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "347": {
        "name": "key",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "348": {
        "name": "construct-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "construct-modifier"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "349": {
        "name": "construct-modifier",
        "position": 0,
        "symbols": []
      },
      "350": {
        "name": "construct-modifier",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LAZY"
          }
        ]
      },
      "351": {
        "name": "table-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "table-rows"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "352": {
        "name": "table-headers",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_opt"
          }
        ]
      },
      "353": {
        "name": "table-headers_I0_opt",
        "position": 0,
        "symbols": []
      },
      "354": {
        "name": "table-headers_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0"
          }
        ]
      },
      "355": {
        "name": "table-headers_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-header"
          }
        ]
      },
      "356": {
        "name": "table-headers_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "357": {
        "name": "table-headers_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0"
          }
        ]
      },
      "358": {
        "name": "table-headers_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-header"
          }
        ]
      },
      "359": {
        "name": "list-table-header",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "360": {
        "name": "table-header",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-header_I1_opt"
          }
        ]
      },
      "361": {
        "name": "table-header_I1_opt",
        "position": 0,
        "symbols": []
      },
      "362": {
        "name": "table-header_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header_I1"
          }
        ]
      },
      "363": {
        "name": "table-header_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "364": {
        "name": "table-rows",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_opt"
          }
        ]
      },
      "365": {
        "name": "table-rows_I0_opt",
        "position": 0,
        "symbols": []
      },
      "366": {
        "name": "table-rows_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0"
          }
        ]
      },
      "367": {
        "name": "table-rows_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "368": {
        "name": "table-rows_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "369": {
        "name": "table-rows_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0"
          }
        ]
      },
      "370": {
        "name": "table-rows_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "371": {
        "name": "table-row",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ROW"
          },
          {
            "type": "Nonterm",
            "name": "table-items"
          }
        ]
      },
      "372": {
        "name": "table-items",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_opt"
          }
        ]
      },
      "373": {
        "name": "table-items_I0_opt",
        "position": 0,
        "symbols": []
      },
      "374": {
        "name": "table-items_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0"
          }
        ]
      },
      "375": {
        "name": "table-items_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "376": {
        "name": "table-items_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "377": {
        "name": "table-items_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0"
          }
        ]
      },
      "378": {
        "name": "table-items_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-item"
          }
        ]
      },
      "379": {
        "name": "list-table-item",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "380": {
        "name": "reactor-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REACTOR"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "381": {
        "name": "dot-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "382": {
        "name": "bracket-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "383": {
        "name": "get-bang-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "384": {
        "name": "extend-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "385": {
        "name": "update-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "386": {
        "name": "if-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I5_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "387": {
        "name": "if-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "388": {
        "name": "if-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "389": {
        "name": "if-expr_I4_star",
        "position": 0,
        "symbols": []
      },
      "390": {
        "name": "if-expr_I4_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4"
          }
        ]
      },
      "391": {
        "name": "if-expr_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "else-if"
          }
        ]
      },
      "392": {
        "name": "if-expr_I5_opt",
        "position": 0,
        "symbols": []
      },
      "393": {
        "name": "if-expr_I5_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I5"
          }
        ]
      },
      "394": {
        "name": "if-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "395": {
        "name": "else-if",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "396": {
        "name": "if-pipe-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ASK"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "397": {
        "name": "if-pipe-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "398": {
        "name": "if-pipe-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "399": {
        "name": "if-pipe-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "400": {
        "name": "if-pipe-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2"
          }
        ]
      },
      "401": {
        "name": "if-pipe-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-branch"
          }
        ]
      },
      "402": {
        "name": "if-pipe-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "403": {
        "name": "if-pipe-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3"
          }
        ]
      },
      "404": {
        "name": "if-pipe-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "405": {
        "name": "if-pipe-branch",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "406": {
        "name": "cases-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "407": {
        "name": "cases-binding_I0_opt",
        "position": 0,
        "symbols": []
      },
      "408": {
        "name": "cases-binding_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0"
          }
        ]
      },
      "409": {
        "name": "cases-binding_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "410": {
        "name": "cases-args",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "411": {
        "name": "cases-args_I1_opt",
        "position": 0,
        "symbols": []
      },
      "412": {
        "name": "cases-args_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1"
          }
        ]
      },
      "413": {
        "name": "cases-args_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          }
        ]
      },
      "414": {
        "name": "cases-args_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "415": {
        "name": "cases-args_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1"
          }
        ]
      },
      "416": {
        "name": "cases-args_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "cases-binding"
          }
        ]
      },
      "417": {
        "name": "cases-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CASES"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I5"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I7_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "418": {
        "name": "cases-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "419": {
        "name": "cases-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "420": {
        "name": "cases-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "421": {
        "name": "cases-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "422": {
        "name": "cases-expr_I6_star",
        "position": 0,
        "symbols": []
      },
      "423": {
        "name": "cases-expr_I6_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6"
          }
        ]
      },
      "424": {
        "name": "cases-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch"
          }
        ]
      },
      "425": {
        "name": "cases-expr_I7_opt",
        "position": 0,
        "symbols": []
      },
      "426": {
        "name": "cases-expr_I7_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I7"
          }
        ]
      },
      "427": {
        "name": "cases-expr_I7",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "428": {
        "name": "cases-branch",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "429": {
        "name": "cases-branch_I2_opt",
        "position": 0,
        "symbols": []
      },
      "430": {
        "name": "cases-branch_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch_I2"
          }
        ]
      },
      "431": {
        "name": "cases-branch_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args"
          }
        ]
      },
      "432": {
        "name": "for-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "433": {
        "name": "for-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FOR"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I6"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "434": {
        "name": "for-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "435": {
        "name": "for-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3"
          }
        ]
      },
      "436": {
        "name": "for-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          }
        ]
      },
      "437": {
        "name": "for-expr_I3_I1_star",
        "position": 0,
        "symbols": []
      },
      "438": {
        "name": "for-expr_I3_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1"
          }
        ]
      },
      "439": {
        "name": "for-expr_I3_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "for-bind"
          }
        ]
      },
      "440": {
        "name": "for-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "441": {
        "name": "for-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "442": {
        "name": "column-order",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "column-order_I1"
          }
        ]
      },
      "443": {
        "name": "column-order_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ASCENDING"
          }
        ]
      },
      "444": {
        "name": "column-order_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DESCENDING"
          }
        ]
      },
      "445": {
        "name": "table-select",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-SELECT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "446": {
        "name": "table-select_I2_star",
        "position": 0,
        "symbols": []
      },
      "447": {
        "name": "table-select_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2"
          }
        ]
      },
      "448": {
        "name": "table-select_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "449": {
        "name": "table-filter",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-FILTER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "450": {
        "name": "table-filter_I2_opt",
        "position": 0,
        "symbols": []
      },
      "451": {
        "name": "table-filter_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2"
          }
        ]
      },
      "452": {
        "name": "table-filter_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          }
        ]
      },
      "453": {
        "name": "table-filter_I2_I2_star",
        "position": 0,
        "symbols": []
      },
      "454": {
        "name": "table-filter_I2_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2"
          }
        ]
      },
      "455": {
        "name": "table-filter_I2_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "456": {
        "name": "table-order",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-ORDER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          },
          {
            "type": "Nonterm",
            "name": "table-order_I4_star"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "457": {
        "name": "table-order_I4_star",
        "position": 0,
        "symbols": []
      },
      "458": {
        "name": "table-order_I4_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "table-order_I4"
          }
        ]
      },
      "459": {
        "name": "table-order_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          }
        ]
      },
      "460": {
        "name": "table-extract",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTRACT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "461": {
        "name": "table-update",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-UPDATE"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "462": {
        "name": "table-update_I2_opt",
        "position": 0,
        "symbols": []
      },
      "463": {
        "name": "table-update_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2"
          }
        ]
      },
      "464": {
        "name": "table-update_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          }
        ]
      },
      "465": {
        "name": "table-update_I2_I2_star",
        "position": 0,
        "symbols": []
      },
      "466": {
        "name": "table-update_I2_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2"
          }
        ]
      },
      "467": {
        "name": "table-update_I2_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "468": {
        "name": "table-extend",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTEND"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "469": {
        "name": "table-extend_I2_opt",
        "position": 0,
        "symbols": []
      },
      "470": {
        "name": "table-extend_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2"
          }
        ]
      },
      "471": {
        "name": "table-extend_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          }
        ]
      },
      "472": {
        "name": "table-extend_I2_I2_star",
        "position": 0,
        "symbols": []
      },
      "473": {
        "name": "table-extend_I2_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2"
          }
        ]
      },
      "474": {
        "name": "table-extend_I2_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "475": {
        "name": "table-extend-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2_opt"
          }
        ]
      },
      "476": {
        "name": "table-extend-fields_I0_star",
        "position": 0,
        "symbols": []
      },
      "477": {
        "name": "table-extend-fields_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0"
          }
        ]
      },
      "478": {
        "name": "table-extend-fields_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-extend-field"
          }
        ]
      },
      "479": {
        "name": "table-extend-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "480": {
        "name": "table-extend-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2"
          }
        ]
      },
      "481": {
        "name": "table-extend-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "482": {
        "name": "list-table-extend-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "483": {
        "name": "table-extend-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "484": {
        "name": "table-extend-field_A0_I1_opt",
        "position": 0,
        "symbols": []
      },
      "485": {
        "name": "table-extend-field_A0_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1"
          }
        ]
      },
      "486": {
        "name": "table-extend-field_A0_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "487": {
        "name": "table-extend-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "OF"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "488": {
        "name": "table-extend-field_A1_I1_opt",
        "position": 0,
        "symbols": []
      },
      "489": {
        "name": "table-extend-field_A1_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1"
          }
        ]
      },
      "490": {
        "name": "table-extend-field_A1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "491": {
        "name": "load-table-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LOAD-TABLE"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "492": {
        "name": "load-table-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "493": {
        "name": "load-table-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3"
          }
        ]
      },
      "494": {
        "name": "load-table-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs"
          }
        ]
      },
      "495": {
        "name": "load-table-specs",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "496": {
        "name": "load-table-specs_I0_star",
        "position": 0,
        "symbols": []
      },
      "497": {
        "name": "load-table-specs_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0"
          }
        ]
      },
      "498": {
        "name": "load-table-specs_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "499": {
        "name": "load-table-spec",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SOURCECOLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "500": {
        "name": "load-table-spec",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SANITIZE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "501": {
        "name": "user-block-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "502": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "503": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "504": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann"
          }
        ]
      },
      "505": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann"
          }
        ]
      },
      "506": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "pred-ann"
          }
        ]
      },
      "507": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "508": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann"
          }
        ]
      },
      "509": {
        "name": "name-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "510": {
        "name": "comma-ann-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1_star"
          }
        ]
      },
      "511": {
        "name": "comma-ann-field_I1_star",
        "position": 0,
        "symbols": []
      },
      "512": {
        "name": "comma-ann-field_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1"
          }
        ]
      },
      "513": {
        "name": "comma-ann-field_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann-field"
          }
        ]
      },
      "514": {
        "name": "trailing-opt-comma-ann-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0"
          }
        ]
      },
      "515": {
        "name": "trailing-opt-comma-ann-field_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-ann-field"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt"
          }
        ]
      },
      "516": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt",
        "position": 0,
        "symbols": []
      },
      "517": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0_A0_I1"
          }
        ]
      },
      "518": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "519": {
        "name": "trailing-opt-comma-ann-field_I0",
        "position": 0,
        "symbols": []
      },
      "520": {
        "name": "record-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "521": {
        "name": "ann-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "522": {
        "name": "tuple-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "523": {
        "name": "tuple-ann_I2_star",
        "position": 0,
        "symbols": []
      },
      "524": {
        "name": "tuple-ann_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2"
          }
        ]
      },
      "525": {
        "name": "tuple-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "526": {
        "name": "tuple-ann_I3_opt",
        "position": 0,
        "symbols": []
      },
      "527": {
        "name": "tuple-ann_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3"
          }
        ]
      },
      "528": {
        "name": "tuple-ann_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "529": {
        "name": "noparen-arrow-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "530": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 0,
        "symbols": []
      },
      "531": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0"
          }
        ]
      },
      "532": {
        "name": "noparen-arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-args"
          }
        ]
      },
      "533": {
        "name": "arrow-ann-args",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "534": {
        "name": "arrow-ann-args",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-args_A1_I0"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "535": {
        "name": "arrow-ann-args_A1_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "536": {
        "name": "arrow-ann-args_A1_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "537": {
        "name": "arrow-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I0"
          },
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "538": {
        "name": "arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "539": {
        "name": "arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "540": {
        "name": "arrow-ann_I1_opt",
        "position": 0,
        "symbols": []
      },
      "541": {
        "name": "arrow-ann_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1"
          }
        ]
      },
      "542": {
        "name": "arrow-ann_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-args"
          }
        ]
      },
      "543": {
        "name": "app-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann_I0"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "544": {
        "name": "app-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "545": {
        "name": "app-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "546": {
        "name": "comma-anns",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          }
        ]
      },
      "547": {
        "name": "comma-anns_I1_star",
        "position": 0,
        "symbols": []
      },
      "548": {
        "name": "comma-anns_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1"
          }
        ]
      },
      "549": {
        "name": "comma-anns_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "550": {
        "name": "pred-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "pred-ann_I2"
          },
          {
            "type": "Nonterm",
            "name": "id-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "551": {
        "name": "pred-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "552": {
        "name": "pred-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "553": {
        "name": "dot-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "554": {
        "name": "START",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "program"
          }
        ]
      },
      "844": {
        "name": "program",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "937": {
        "name": "prelude",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "1218": {
        "name": "prelude_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0"
          }
        ]
      },
      "1267": {
        "name": "prelude_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-stmt"
          }
        ]
      },
      "4670": {
        "name": "program",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "4672": {
        "name": "block",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          }
        ]
      },
      "9635": {
        "name": "prelude",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "9775": {
        "name": "prelude_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I1"
          }
        ]
      },
      "9823": {
        "name": "prelude_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-types-stmt"
          }
        ]
      },
      "10016": {
        "name": "id-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "10056": {
        "name": "string-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "10143": {
        "name": "provide-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "10192": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-expr"
          }
        ]
      },
      "10194": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-expr"
          }
        ]
      },
      "10196": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-stmt"
          }
        ]
      },
      "10198": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "10200": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fun-expr"
          }
        ]
      },
      "10202": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr"
          }
        ]
      },
      "10204": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "when-expr"
          }
        ]
      },
      "10206": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "10208": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rec-expr"
          }
        ]
      },
      "10210": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "assign-expr"
          }
        ]
      },
      "10212": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test"
          }
        ]
      },
      "10214": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr"
          }
        ]
      },
      "10216": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "contract-stmt"
          }
        ]
      },
      "10306": {
        "name": "check-test",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "10791": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "10835": {
        "name": "toplevel-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "10837": {
        "name": "binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "10839": {
        "name": "binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding"
          }
        ]
      },
      "11186": {
        "name": "name-binding_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0"
          }
        ]
      },
      "11188": {
        "name": "name-binding_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SHADOW"
          }
        ]
      },
      "11190": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr"
          }
        ]
      },
      "11317": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr"
          }
        ]
      },
      "11393": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr"
          }
        ]
      },
      "11483": {
        "name": "paren-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "11519": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECK"
          }
        ]
      },
      "11565": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLES"
          }
        ]
      },
      "11611": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECKCOLON"
          }
        ]
      },
      "11657": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLESCOLON"
          }
        ]
      },
      "11703": {
        "name": "paren-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "11743": {
        "name": "binop-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "12166": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr"
          }
        ]
      },
      "12204": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prim-expr"
          }
        ]
      },
      "12242": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "lambda-expr"
          }
        ]
      },
      "12280": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "method-expr"
          }
        ]
      },
      "12318": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-expr"
          }
        ]
      },
      "12356": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-expr"
          }
        ]
      },
      "12394": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-expr"
          }
        ]
      },
      "12432": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-get"
          }
        ]
      },
      "12470": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-expr"
          }
        ]
      },
      "12508": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "template-expr"
          }
        ]
      },
      "12546": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bracket-expr"
          }
        ]
      },
      "12584": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "get-bang-expr"
          }
        ]
      },
      "12622": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "update-expr"
          }
        ]
      },
      "12660": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "extend-expr"
          }
        ]
      },
      "12698": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr"
          }
        ]
      },
      "12736": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr"
          }
        ]
      },
      "12774": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr"
          }
        ]
      },
      "12812": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr"
          }
        ]
      },
      "12850": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "user-block-expr"
          }
        ]
      },
      "12888": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr"
          }
        ]
      },
      "12926": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr"
          }
        ]
      },
      "12964": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select"
          }
        ]
      },
      "13002": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend"
          }
        ]
      },
      "13040": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter"
          }
        ]
      },
      "13078": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order"
          }
        ]
      },
      "13116": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extract"
          }
        ]
      },
      "13154": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update"
          }
        ]
      },
      "13192": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-expr"
          }
        ]
      },
      "13230": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr"
          }
        ]
      },
      "13268": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-expr"
          }
        ]
      },
      "13306": {
        "name": "template-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DOTDOTDOT"
          }
        ]
      },
      "13463": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "num-expr"
          }
        ]
      },
      "13501": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "frac-expr"
          }
        ]
      },
      "13539": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rfrac-expr"
          }
        ]
      },
      "13577": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bool-expr"
          }
        ]
      },
      "13615": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "string-expr"
          }
        ]
      },
      "13653": {
        "name": "num-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NUMBER"
          }
        ]
      },
      "13691": {
        "name": "frac-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RATIONAL"
          }
        ]
      },
      "13729": {
        "name": "rfrac-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ROUGHRATIONAL"
          }
        ]
      },
      "13767": {
        "name": "bool-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "TRUE"
          }
        ]
      },
      "13805": {
        "name": "bool-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "FALSE"
          }
        ]
      },
      "14793": {
        "name": "block_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "stmt"
          }
        ]
      },
      "14839": {
        "name": "block_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "block_I0"
          }
        ]
      },
      "19756": {
        "name": "prelude",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "20038": {
        "name": "provide-types-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "20086": {
        "name": "provide-types-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "20274": {
        "name": "provide-stmt",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Nonterm",
            "name": "stmt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "20327": {
        "name": "spy-stmt_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-stmt_I1"
          }
        ]
      },
      "20329": {
        "name": "spy-stmt_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "20508": {
        "name": "check-test",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op-postfix"
          }
        ]
      },
      "20510": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "IS"
          }
        ]
      },
      "20543": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALEQUAL"
          }
        ]
      },
      "20576": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALTILDE"
          }
        ]
      },
      "20609": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISSPACESHIP"
          }
        ]
      },
      "20642": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISROUGHLY"
          }
        ]
      },
      "20675": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOT"
          }
        ]
      },
      "20708": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALEQUAL"
          }
        ]
      },
      "20741": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALTILDE"
          }
        ]
      },
      "20774": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTSPACESHIP"
          }
        ]
      },
      "20807": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISES"
          }
        ]
      },
      "20840": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESOTHER"
          }
        ]
      },
      "20873": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIES"
          }
        ]
      },
      "20906": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIESNOT"
          }
        ]
      },
      "20939": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESSATISFIES"
          }
        ]
      },
      "20972": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESVIOLATES"
          }
        ]
      },
      "21005": {
        "name": "check-op-postfix",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESNOT"
          }
        ]
      },
      "21017": {
        "name": "key",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "21023": {
        "name": "tuple-fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "21070": {
        "name": "obj-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "21254": {
        "name": "ty-params",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_opt"
          }
        ]
      },
      "21257": {
        "name": "ty-params_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0"
          }
        ]
      },
      "21265": {
        "name": "ty-params_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LANGLE"
          }
        ]
      },
      "21267": {
        "name": "ty-params_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "21468": {
        "name": "obj-fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "21505": {
        "name": "name-binding",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "name-binding_I2_opt"
          }
        ]
      },
      "21510": {
        "name": "let-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "21514": {
        "name": "let-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "21659": {
        "name": "type-let-bind",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-bind"
          }
        ]
      },
      "21663": {
        "name": "type-let-bind",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-bind"
          }
        ]
      },
      "21995": {
        "name": "binop-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "22543": {
        "name": "app-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "app-args"
          }
        ]
      },
      "23222": {
        "name": "construct-modifier",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LAZY"
          }
        ]
      },
      "23298": {
        "name": "table-headers",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_opt"
          }
        ]
      },
      "23301": {
        "name": "table-headers_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0"
          }
        ]
      },
      "23489": {
        "name": "if-pipe-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "23492": {
        "name": "if-pipe-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "23537": {
        "name": "cases-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "23542": {
        "name": "cases-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "24005": {
        "name": "prelude_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2"
          }
        ]
      },
      "24053": {
        "name": "prelude_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-stmt"
          }
        ]
      },
      "24441": {
        "name": "trailing-opt-comma-ann-field_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-ann-field"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt"
          }
        ]
      },
      "24446": {
        "name": "comma-ann-field",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1_star"
          }
        ]
      },
      "24501": {
        "name": "trailing-opt-comma-ann-field",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0"
          }
        ]
      },
      "24503": {
        "name": "name-ann",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "24515": {
        "name": "arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "24516": {
        "name": "arrow-ann-args_A1_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "24523": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "24528": {
        "name": "contract-stmt_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "24530": {
        "name": "comma-anns",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          }
        ]
      },
      "24578": {
        "name": "contract-stmt",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "contract-stmt_I2"
          }
        ]
      },
      "24580": {
        "name": "contract-stmt_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann"
          }
        ]
      },
      "24582": {
        "name": "arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "24583": {
        "name": "arrow-ann-args_A1_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "24590": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "24591": {
        "name": "app-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "24597": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann"
          }
        ]
      },
      "24602": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann"
          }
        ]
      },
      "24607": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "pred-ann"
          }
        ]
      },
      "24612": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "24613": {
        "name": "app-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "24619": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann"
          }
        ]
      },
      "24626": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0"
          }
        ]
      },
      "24628": {
        "name": "noparen-arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-args"
          }
        ]
      },
      "24630": {
        "name": "arrow-ann-args",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "24649": {
        "name": "assign-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONEQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "24667": {
        "name": "check-test_A0_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2"
          }
        ]
      },
      "24800": {
        "name": "let-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "24802": {
        "name": "tuple-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "24812": {
        "name": "args_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "24817": {
        "name": "fun-header",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "24843": {
        "name": "args_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "24863": {
        "name": "tuple-binding_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1"
          }
        ]
      },
      "24869": {
        "name": "lambda-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "24917": {
        "name": "lambda-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "25187": {
        "name": "comma-names",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          }
        ]
      },
      "25219": {
        "name": "tuple-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "25257": {
        "name": "obj-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "25295": {
        "name": "obj-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "25308": {
        "name": "name-binding",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "name-binding_I2_opt"
          }
        ]
      },
      "25310": {
        "name": "name-binding_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I2"
          }
        ]
      },
      "25463": {
        "name": "user-block-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "25875": {
        "name": "check-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "25888": {
        "name": "when-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "25934": {
        "name": "when-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "25984": {
        "name": "comma-binops",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "comma-binops_I1_star"
          }
        ]
      },
      "26096": {
        "name": "opt-comma-binops",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_opt"
          }
        ]
      },
      "26098": {
        "name": "opt-comma-binops_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0"
          }
        ]
      },
      "26100": {
        "name": "opt-comma-binops_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops"
          }
        ]
      },
      "26172": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "26204": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "26236": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "26268": {
        "name": "binop-expr_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1"
          }
        ]
      },
      "26334": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PLUS"
          }
        ]
      },
      "26366": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DASH"
          }
        ]
      },
      "26398": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SLASH"
          }
        ]
      },
      "26430": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LEQ"
          }
        ]
      },
      "26462": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GEQ"
          }
        ]
      },
      "26494": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALEQUAL"
          }
        ]
      },
      "26526": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SPACESHIP"
          }
        ]
      },
      "26558": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALTILDE"
          }
        ]
      },
      "26590": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NEQ"
          }
        ]
      },
      "26622": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "AND"
          }
        ]
      },
      "26654": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "OR"
          }
        ]
      },
      "26686": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "CARET"
          }
        ]
      },
      "26718": {
        "name": "dot-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "26957": {
        "name": "get-bang-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "27033": {
        "name": "paren-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "27115": {
        "name": "method-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "27163": {
        "name": "method-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "27325": {
        "name": "table-rows",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_opt"
          }
        ]
      },
      "27327": {
        "name": "table-rows_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0"
          }
        ]
      },
      "27336": {
        "name": "table-header",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-header_I1_opt"
          }
        ]
      },
      "27349": {
        "name": "table-headers_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-header"
          }
        ]
      },
      "27354": {
        "name": "table-headers_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0"
          }
        ]
      },
      "27356": {
        "name": "table-headers_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-header"
          }
        ]
      },
      "27402": {
        "name": "fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "27408": {
        "name": "if-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "27456": {
        "name": "if-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "27794": {
        "name": "table-filter_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2"
          }
        ]
      },
      "27920": {
        "name": "table-update_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2"
          }
        ]
      },
      "27962": {
        "name": "table-extend_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2"
          }
        ]
      },
      "28018": {
        "name": "import-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "INCLUDE"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "28067": {
        "name": "import-name",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "28162": {
        "name": "import-source",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special"
          }
        ]
      },
      "28210": {
        "name": "import-source",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-name"
          }
        ]
      },
      "28364": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "28366": {
        "name": "trailing-opt-comma-ann-field_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-ann-field"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt"
          }
        ]
      },
      "28368": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0_A0_I1"
          }
        ]
      },
      "28370": {
        "name": "comma-ann-field",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1_star"
          }
        ]
      },
      "28378": {
        "name": "record-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "28439": {
        "name": "comma-anns",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          }
        ]
      },
      "28495": {
        "name": "arrow-ann_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-args"
          }
        ]
      },
      "28502": {
        "name": "arrow-ann_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1"
          }
        ]
      },
      "28515": {
        "name": "spy-stmt_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-stmt_I3"
          }
        ]
      },
      "28517": {
        "name": "spy-stmt_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-contents"
          }
        ]
      },
      "28519": {
        "name": "spy-contents",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-field"
          },
          {
            "type": "Nonterm",
            "name": "spy-contents_I1_star"
          }
        ]
      },
      "28525": {
        "name": "spy-field",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "28528": {
        "name": "check-test",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_opt"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "28530": {
        "name": "check-test_A0_I2_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "28594": {
        "name": "check-test_A0_I2_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "28628": {
        "name": "newtype-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "28631": {
        "name": "tuple-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "28635": {
        "name": "tuple-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "28637": {
        "name": "tuple-fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1"
          }
        ]
      },
      "28640": {
        "name": "tuple-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2"
          }
        ]
      },
      "28642": {
        "name": "fun-header",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "28645": {
        "name": "return-ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0_opt"
          }
        ]
      },
      "28648": {
        "name": "return-ann_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0"
          }
        ]
      },
      "28681": {
        "name": "args_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          }
        ]
      },
      "28699": {
        "name": "args_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1"
          }
        ]
      },
      "28703": {
        "name": "tuple-binding_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "28704": {
        "name": "tuple-binding_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "28709": {
        "name": "tuple-binding_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3"
          }
        ]
      },
      "28755": {
        "name": "doc-string",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0_opt"
          }
        ]
      },
      "28802": {
        "name": "doc-string_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0"
          }
        ]
      },
      "28896": {
        "name": "comma-names",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          }
        ]
      },
      "28906": {
        "name": "ty-params_I0",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I0"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I2"
          }
        ]
      },
      "28909": {
        "name": "ty-params_I0_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "28912": {
        "name": "ty-params_I0_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "28920": {
        "name": "obj-field_A1_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2"
          }
        ]
      },
      "29020": {
        "name": "obj-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "29024": {
        "name": "obj-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "29026": {
        "name": "obj-fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1"
          }
        ]
      },
      "29029": {
        "name": "obj-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I2"
          }
        ]
      },
      "29031": {
        "name": "obj-field",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "29037": {
        "name": "name-binding_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "29054": {
        "name": "multi-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "29138": {
        "name": "multi-let-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2"
          }
        ]
      },
      "29142": {
        "name": "multi-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "29192": {
        "name": "letrec-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "29238": {
        "name": "letrec-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "29322": {
        "name": "letrec-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2"
          }
        ]
      },
      "29338": {
        "name": "type-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "29384": {
        "name": "type-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "29468": {
        "name": "type-let-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2"
          }
        ]
      },
      "29472": {
        "name": "fun-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "29520": {
        "name": "fun-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "29599": {
        "name": "var-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "VAR"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "29601": {
        "name": "rec-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "REC"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "29605": {
        "name": "comma-binops",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "comma-binops_I1_star"
          }
        ]
      },
      "29612": {
        "name": "app-args",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "29694": {
        "name": "binop-expr_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "29808": {
        "name": "bracket-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "30006": {
        "name": "table-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "table-rows"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "30044": {
        "name": "table-rows_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "30045": {
        "name": "table-rows_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "30048": {
        "name": "table-rows_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0"
          }
        ]
      },
      "30050": {
        "name": "table-row",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ROW"
          },
          {
            "type": "Nonterm",
            "name": "table-items"
          }
        ]
      },
      "30141": {
        "name": "table-header",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-header_I1_opt"
          }
        ]
      },
      "30145": {
        "name": "table-header_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header_I1"
          }
        ]
      },
      "30149": {
        "name": "list-table-header",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "30151": {
        "name": "reactor-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "REACTOR"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "30195": {
        "name": "fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "30599": {
        "name": "if-pipe-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2"
          }
        ]
      },
      "30602": {
        "name": "if-pipe-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-branch"
          }
        ]
      },
      "30605": {
        "name": "if-pipe-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3"
          }
        ]
      },
      "30653": {
        "name": "for-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          }
        ]
      },
      "30697": {
        "name": "for-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3"
          }
        ]
      },
      "30740": {
        "name": "table-select_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2"
          }
        ]
      },
      "30781": {
        "name": "table-filter_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          }
        ]
      },
      "30878": {
        "name": "table-update_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          }
        ]
      },
      "30926": {
        "name": "table-extend_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          }
        ]
      },
      "31011": {
        "name": "load-table-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3"
          }
        ]
      },
      "31013": {
        "name": "load-table-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs"
          }
        ]
      },
      "31176": {
        "name": "ann-field",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31182": {
        "name": "comma-ann-field_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1"
          }
        ]
      },
      "31185": {
        "name": "dot-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "31191": {
        "name": "pred-ann_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "31193": {
        "name": "pred-ann_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "31203": {
        "name": "comma-anns_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1"
          }
        ]
      },
      "31223": {
        "name": "noparen-arrow-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31225": {
        "name": "arrow-ann-args",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-args_A1_I0"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "31243": {
        "name": "spy-stmt",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "SPY"
          },
          {
            "type": "Nonterm",
            "name": "spy-stmt_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "spy-stmt_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31245": {
        "name": "spy-contents",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-field"
          },
          {
            "type": "Nonterm",
            "name": "spy-contents_I1_star"
          }
        ]
      },
      "31284": {
        "name": "type-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31286": {
        "name": "tuple-fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "31295": {
        "name": "return-ann_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31319": {
        "name": "args_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          }
        ]
      },
      "31326": {
        "name": "args",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I0"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "31330": {
        "name": "tuple-binding",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5_opt"
          }
        ]
      },
      "31522": {
        "name": "doc-string_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "DOC"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "31573": {
        "name": "comma-names_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1"
          }
        ]
      },
      "31577": {
        "name": "obj-field_A1_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31582": {
        "name": "obj-field_A2_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "31630": {
        "name": "obj-field_A2_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "31681": {
        "name": "obj-fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "obj-field"
          }
        ]
      },
      "31685": {
        "name": "multi-let-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          }
        ]
      },
      "31727": {
        "name": "letrec-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "31769": {
        "name": "type-bind",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31773": {
        "name": "newtype-bind",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "31777": {
        "name": "type-let-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          }
        ]
      },
      "31821": {
        "name": "check-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31823": {
        "name": "first-data-variant",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "31865": {
        "name": "data-expr_I4_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I4"
          }
        ]
      },
      "31870": {
        "name": "data-expr_I4",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "first-data-variant"
          }
        ]
      },
      "31875": {
        "name": "first-data-variant",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "31880": {
        "name": "when-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "WHEN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "when-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31885": {
        "name": "comma-binops_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-binops_I1"
          }
        ]
      },
      "31891": {
        "name": "inst-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "31929": {
        "name": "inst-expr_I3_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3"
          }
        ]
      },
      "31932": {
        "name": "extend-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "31970": {
        "name": "tuple-get",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "NUMBER"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "32008": {
        "name": "update-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "32130": {
        "name": "trailing-opt-comma-binops_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0_A0_I1_opt"
          }
        ]
      },
      "32173": {
        "name": "trailing-opt-comma-binops",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0"
          }
        ]
      },
      "32175": {
        "name": "table-row",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "ROW"
          },
          {
            "type": "Nonterm",
            "name": "table-items"
          }
        ]
      },
      "32178": {
        "name": "table-items",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_opt"
          }
        ]
      },
      "32181": {
        "name": "table-items_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0"
          }
        ]
      },
      "32365": {
        "name": "table-header_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "32477": {
        "name": "field",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "32481": {
        "name": "fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "32485": {
        "name": "fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "32487": {
        "name": "fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1"
          }
        ]
      },
      "32490": {
        "name": "fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I2"
          }
        ]
      },
      "32621": {
        "name": "if-pipe-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "32632": {
        "name": "if-pipe-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "ASK"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "32715": {
        "name": "for-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          }
        ]
      },
      "32798": {
        "name": "table-select_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "32839": {
        "name": "table-filter_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          }
        ]
      },
      "32846": {
        "name": "column-order",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "column-order_I1"
          }
        ]
      },
      "32849": {
        "name": "column-order_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ASCENDING"
          }
        ]
      },
      "32852": {
        "name": "column-order_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DESCENDING"
          }
        ]
      },
      "32898": {
        "name": "table-extract",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTRACT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "32936": {
        "name": "table-update_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          }
        ]
      },
      "32987": {
        "name": "table-extend_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          }
        ]
      },
      "33042": {
        "name": "load-table-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "LOAD-TABLE"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33080": {
        "name": "load-table-specs",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "33081": {
        "name": "load-table-specs_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "33085": {
        "name": "load-table-specs_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0"
          }
        ]
      },
      "33308": {
        "name": "import-stmt",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "33356": {
        "name": "import-stmt",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "33404": {
        "name": "comma-ann-field_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann-field"
          }
        ]
      },
      "33412": {
        "name": "comma-anns_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "33416": {
        "name": "tuple-ann_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "33425": {
        "name": "tuple-ann_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2"
          }
        ]
      },
      "33428": {
        "name": "tuple-ann_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3"
          }
        ]
      },
      "33435": {
        "name": "app-ann",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann_I0"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "33440": {
        "name": "spy-field",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "33446": {
        "name": "spy-contents_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-contents_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "spy-contents_I1"
          }
        ]
      },
      "33449": {
        "name": "check-test_A0_I2",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_I1"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "33486": {
        "name": "args_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1"
          }
        ]
      },
      "33491": {
        "name": "tuple-binding",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5_opt"
          }
        ]
      },
      "33493": {
        "name": "tuple-binding_I5_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5"
          }
        ]
      },
      "33533": {
        "name": "where-clause",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0_opt"
          }
        ]
      },
      "33535": {
        "name": "where-clause_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0"
          }
        ]
      },
      "33537": {
        "name": "where-clause_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33539": {
        "name": "comma-names_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "33543": {
        "name": "obj-field",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "33549": {
        "name": "multi-let-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LET"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33587": {
        "name": "letrec-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LETREC"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33625": {
        "name": "type-let-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE-LET"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33685": {
        "name": "variant-constructor",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "variant-members"
          }
        ]
      },
      "33691": {
        "name": "first-data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "33696": {
        "name": "data-with",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0_opt"
          }
        ]
      },
      "33701": {
        "name": "data-with_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0"
          }
        ]
      },
      "33747": {
        "name": "first-data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "33752": {
        "name": "comma-binops_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "33755": {
        "name": "inst-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "33837": {
        "name": "trailing-opt-comma-binops_I0_A0_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "33839": {
        "name": "trailing-opt-comma-binops_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0_A0_I1_opt"
          }
        ]
      },
      "33841": {
        "name": "trailing-opt-comma-binops_I0_A0_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0_A0_I1"
          }
        ]
      },
      "33843": {
        "name": "construct-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "construct-modifier"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "33883": {
        "name": "table-items_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "33988": {
        "name": "table-items_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0"
          }
        ]
      },
      "34020": {
        "name": "table-items_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-item"
          }
        ]
      },
      "34065": {
        "name": "field_A1_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "34113": {
        "name": "field_A1_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "34164": {
        "name": "fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "field"
          }
        ]
      },
      "34205": {
        "name": "if-expr_I4_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4"
          }
        ]
      },
      "34209": {
        "name": "if-expr_I4",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "else-if"
          }
        ]
      },
      "34213": {
        "name": "if-expr_I5_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I5"
          }
        ]
      },
      "34215": {
        "name": "if-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34221": {
        "name": "if-pipe-branch",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34227": {
        "name": "if-pipe-expr_I3",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34229": {
        "name": "cases-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "34232": {
        "name": "cases-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "34277": {
        "name": "for-bind",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "34283": {
        "name": "for-expr_I3_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1"
          }
        ]
      },
      "34414": {
        "name": "table-select",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-SELECT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34452": {
        "name": "table-filter",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-FILTER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34493": {
        "name": "table-filter_I2_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2"
          }
        ]
      },
      "34499": {
        "name": "table-order",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-ORDER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          },
          {
            "type": "Nonterm",
            "name": "table-order_I4_star"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34537": {
        "name": "table-order_I4_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "table-order_I4"
          }
        ]
      },
      "34543": {
        "name": "table-update_I2_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2"
          }
        ]
      },
      "34546": {
        "name": "table-update",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-UPDATE"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34587": {
        "name": "table-extend_I2_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2"
          }
        ]
      },
      "34590": {
        "name": "table-extend",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTEND"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34640": {
        "name": "table-extend-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2_opt"
          }
        ]
      },
      "34647": {
        "name": "table-extend-fields_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0"
          }
        ]
      },
      "34649": {
        "name": "table-extend-fields_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-extend-field"
          }
        ]
      },
      "34679": {
        "name": "load-table-spec",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SOURCECOLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "34874": {
        "name": "pred-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "pred-ann_I2"
          },
          {
            "type": "Nonterm",
            "name": "id-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "34879": {
        "name": "tuple-ann_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "34882": {
        "name": "tuple-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "34887": {
        "name": "arrow-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I0"
          },
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "34892": {
        "name": "spy-contents_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "spy-field"
          }
        ]
      },
      "34895": {
        "name": "args_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "34898": {
        "name": "tuple-binding_I5",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "34900": {
        "name": "lambda-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "34938": {
        "name": "where-clause_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34951": {
        "name": "variant-members_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1"
          }
        ]
      },
      "34953": {
        "name": "variant-members_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          }
        ]
      },
      "34962": {
        "name": "variant-member_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0"
          }
        ]
      },
      "34966": {
        "name": "variant-member_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "34970": {
        "name": "data-with_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "WITH"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "34992": {
        "name": "data-expr_I5_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5"
          }
        ]
      },
      "34997": {
        "name": "data-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-variant"
          }
        ]
      },
      "35012": {
        "name": "data-sharing",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0_opt"
          }
        ]
      },
      "35015": {
        "name": "data-sharing_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0"
          }
        ]
      },
      "35021": {
        "name": "lambda-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "LAM"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35059": {
        "name": "method-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "method-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35097": {
        "name": "list-table-item",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "35132": {
        "name": "if-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "IF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I5_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35170": {
        "name": "if-expr_I5",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "35176": {
        "name": "if-pipe-branch",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "35340": {
        "name": "for-expr_I3_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "for-bind"
          }
        ]
      },
      "35343": {
        "name": "for-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "35389": {
        "name": "for-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "35473": {
        "name": "table-filter_I2_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "35476": {
        "name": "table-order_I4",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          }
        ]
      },
      "35479": {
        "name": "table-update_I2_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "35482": {
        "name": "table-extend_I2_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "35492": {
        "name": "table-extend-field_A0_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1"
          }
        ]
      },
      "35497": {
        "name": "table-extend-field_A1_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1"
          }
        ]
      },
      "35499": {
        "name": "list-table-extend-field",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "35500": {
        "name": "table-extend-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "35503": {
        "name": "table-extend-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2_opt"
          }
        ]
      },
      "35505": {
        "name": "table-extend-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2"
          }
        ]
      },
      "35529": {
        "name": "import-special",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "35577": {
        "name": "import-special_I3_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3"
          }
        ]
      },
      "35586": {
        "name": "fun-expr",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "FUN"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "fun-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35588": {
        "name": "variant-members",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "35594": {
        "name": "variant-members_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          }
        ]
      },
      "35601": {
        "name": "variant-member",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "35606": {
        "name": "data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "35611": {
        "name": "data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "35616": {
        "name": "data-sharing_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SHARING"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "35622": {
        "name": "else-if",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "35669": {
        "name": "cases-expr_I6_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6"
          }
        ]
      },
      "35672": {
        "name": "cases-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch"
          }
        ]
      },
      "35675": {
        "name": "cases-expr_I7_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I7"
          }
        ]
      },
      "35715": {
        "name": "table-extend-field_A0_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "35716": {
        "name": "table-extend-field_A1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "35805": {
        "name": "load-table-spec",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "SANITIZE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "35809": {
        "name": "import-special_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "35812": {
        "name": "obj-field",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A2_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35818": {
        "name": "variant-members_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1"
          }
        ]
      },
      "35821": {
        "name": "data-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "DATA"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I4_opt"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-sharing"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35823": {
        "name": "data-variant",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "35828": {
        "name": "data-variant",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "35836": {
        "name": "else-if",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "35849": {
        "name": "cases-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "CASES"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I5"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I7_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35887": {
        "name": "for-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "FOR"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I6"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35925": {
        "name": "table-extend-field",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "36012": {
        "name": "variant-members_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "variant-member"
          }
        ]
      },
      "36015": {
        "name": "field",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "field_A1_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "36034": {
        "name": "cases-branch_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args"
          }
        ]
      },
      "36039": {
        "name": "cases-branch_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch_I2"
          }
        ]
      },
      "36041": {
        "name": "cases-expr_I7",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "36055": {
        "name": "cases-binding_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "36059": {
        "name": "cases-args_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          }
        ]
      },
      "36068": {
        "name": "cases-binding_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0"
          }
        ]
      },
      "36074": {
        "name": "cases-args_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1"
          }
        ]
      },
      "36076": {
        "name": "cases-branch",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "36079": {
        "name": "cases-expr_I7",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "36081": {
        "name": "table-extend-field",
        "position": 6,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "OF"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "36084": {
        "name": "cases-args_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          }
        ]
      },
      "36091": {
        "name": "cases-binding",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "36094": {
        "name": "cases-args",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "36096": {
        "name": "cases-branch",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "36102": {
        "name": "cases-args_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1"
          }
        ]
      },
      "36105": {
        "name": "cases-args_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "cases-binding"
          }
        ]
      }
    },
    "actionsByOldId": {
      "0": "Rule.defaultAction",
      "1": "Rule.defaultAction",
      "2": "Rule.Inline",
      "3": "Rule.Inline",
      "4": "Rule.Inline",
      "5": "Rule.Inline",
      "6": "Rule.Inline",
      "7": "Rule.Inline",
      "8": "Rule.Inline",
      "9": "Rule.ListSnoc(\"prelude_I2_star\", \"prelude_I2\", true)",
      "10": "Rule.Inline",
      "11": "Rule.defaultAction",
      "12": "Rule.defaultAction",
      "13": "Rule.defaultAction",
      "14": "Rule.defaultAction",
      "15": "Rule.defaultAction",
      "16": "Rule.defaultAction",
      "17": "Rule.Inline",
      "18": "Rule.ListSnoc(\"import-special_I3_star\", \"import-special_I3\", true)",
      "19": "Rule.Inline",
      "20": "Rule.defaultAction",
      "21": "Rule.defaultAction",
      "22": "Rule.defaultAction",
      "23": "Rule.defaultAction",
      "24": "Rule.defaultAction",
      "25": "Rule.defaultAction",
      "26": "Rule.Inline",
      "27": "Rule.ListSnoc(\"comma-names_I1_star\", \"comma-names_I1\", true)",
      "28": "Rule.Inline",
      "29": "Rule.defaultAction",
      "30": "Rule.Inline",
      "31": "Rule.ListSnoc(\"block_I0_star\", \"block_I0\", true)",
      "32": "Rule.Inline",
      "33": "Rule.defaultAction",
      "34": "Rule.defaultAction",
      "35": "Rule.defaultAction",
      "36": "Rule.defaultAction",
      "37": "Rule.defaultAction",
      "38": "Rule.defaultAction",
      "39": "Rule.defaultAction",
      "40": "Rule.defaultAction",
      "41": "Rule.defaultAction",
      "42": "Rule.defaultAction",
      "43": "Rule.defaultAction",
      "44": "Rule.defaultAction",
      "45": "Rule.defaultAction",
      "46": "Rule.defaultAction",
      "47": "Rule.Inline",
      "48": "Rule.Inline",
      "49": "Rule.Inline",
      "50": "Rule.Inline",
      "51": "Rule.Inline",
      "52": "Rule.Inline",
      "53": "Rule.defaultAction",
      "54": "Rule.Inline",
      "55": "Rule.ListSnoc(\"spy-contents_I1_star\", \"spy-contents_I1\", true)",
      "56": "Rule.Inline",
      "57": "Rule.defaultAction",
      "58": "Rule.defaultAction",
      "59": "Rule.defaultAction",
      "60": "Rule.defaultAction",
      "61": "Rule.defaultAction",
      "62": "Rule.defaultAction",
      "63": "Rule.defaultAction",
      "64": "Rule.defaultAction",
      "65": "Rule.Inline",
      "66": "Rule.ListSnoc(\"tuple-binding_I1_star\", \"tuple-binding_I1\", true)",
      "67": "Rule.Inline",
      "68": "Rule.Inline",
      "69": "Rule.Inline",
      "70": "Rule.Inline",
      "71": "Rule.Inline",
      "72": "Rule.Inline",
      "73": "Rule.Inline",
      "74": "Rule.defaultAction",
      "75": "Rule.Inline",
      "76": "Rule.Inline",
      "77": "Rule.Inline",
      "78": "Rule.Inline",
      "79": "Rule.Inline",
      "80": "Rule.Inline",
      "81": "Rule.defaultAction",
      "82": "Rule.defaultAction",
      "83": "Rule.Inline",
      "84": "Rule.ListSnoc(\"multi-let-expr_I2_star\", \"multi-let-expr_I2\", true)",
      "85": "Rule.Inline",
      "86": "Rule.Inline",
      "87": "Rule.Inline",
      "88": "Rule.defaultAction",
      "89": "Rule.defaultAction",
      "90": "Rule.defaultAction",
      "91": "Rule.Inline",
      "92": "Rule.ListSnoc(\"letrec-expr_I2_star\", \"letrec-expr_I2\", true)",
      "93": "Rule.Inline",
      "94": "Rule.Inline",
      "95": "Rule.Inline",
      "96": "Rule.defaultAction",
      "97": "Rule.defaultAction",
      "98": "Rule.defaultAction",
      "99": "Rule.defaultAction",
      "100": "Rule.defaultAction",
      "101": "Rule.Inline",
      "102": "Rule.ListSnoc(\"type-let-expr_I2_star\", \"type-let-expr_I2\", true)",
      "103": "Rule.Inline",
      "104": "Rule.Inline",
      "105": "Rule.Inline",
      "106": "Rule.defaultAction",
      "107": "Rule.Inline",
      "108": "Rule.Inline",
      "109": "Rule.defaultAction",
      "110": "Rule.Inline",
      "111": "Rule.Inline",
      "112": "Rule.defaultAction",
      "113": "Rule.defaultAction",
      "114": "Rule.Inline",
      "115": "Rule.Inline",
      "116": "Rule.Inline",
      "117": "Rule.Inline",
      "118": "Rule.Inline",
      "119": "Rule.Inline",
      "120": "Rule.Inline",
      "121": "Rule.defaultAction",
      "122": "Rule.Inline",
      "123": "Rule.Inline",
      "124": "Rule.Inline",
      "125": "Rule.Inline",
      "126": "Rule.Inline",
      "127": "Rule.Inline",
      "128": "Rule.ListSnoc(\"args_I1_I1_star\", \"args_I1_I1\", true)",
      "129": "Rule.Inline",
      "130": "Rule.defaultAction",
      "131": "Rule.Inline",
      "132": "Rule.Inline",
      "133": "Rule.Inline",
      "134": "Rule.defaultAction",
      "135": "Rule.Inline",
      "136": "Rule.Inline",
      "137": "Rule.Inline",
      "138": "Rule.defaultAction",
      "139": "Rule.Inline",
      "140": "Rule.Inline",
      "141": "Rule.Inline",
      "142": "Rule.defaultAction",
      "143": "Rule.Inline",
      "144": "Rule.Inline",
      "145": "Rule.defaultAction",
      "146": "Rule.Inline",
      "147": "Rule.Inline",
      "148": "Rule.defaultAction",
      "149": "Rule.Inline",
      "150": "Rule.Inline",
      "151": "Rule.Inline",
      "152": "Rule.Inline",
      "153": "Rule.Inline",
      "154": "Rule.defaultAction",
      "155": "Rule.defaultAction",
      "156": "Rule.defaultAction",
      "157": "Rule.Inline",
      "158": "Rule.Inline",
      "159": "Rule.Inline",
      "160": "Rule.Inline",
      "161": "Rule.ListSnoc(\"data-expr_I5_star\", \"data-expr_I5\", true)",
      "162": "Rule.Inline",
      "163": "Rule.defaultAction",
      "164": "Rule.defaultAction",
      "165": "Rule.defaultAction",
      "166": "Rule.defaultAction",
      "167": "Rule.defaultAction",
      "168": "Rule.defaultAction",
      "169": "Rule.Inline",
      "170": "Rule.Inline",
      "171": "Rule.Inline",
      "172": "Rule.Inline",
      "173": "Rule.ListSnoc(\"variant-members_I1_I1_star\", \"variant-members_I1_I1\", true)",
      "174": "Rule.Inline",
      "175": "Rule.defaultAction",
      "176": "Rule.Inline",
      "177": "Rule.Inline",
      "178": "Rule.Inline",
      "179": "Rule.defaultAction",
      "180": "Rule.Inline",
      "181": "Rule.Inline",
      "182": "Rule.Inline",
      "183": "Rule.defaultAction",
      "184": "Rule.Inline",
      "185": "Rule.Inline",
      "186": "Rule.Inline",
      "187": "Rule.defaultAction",
      "188": "Rule.defaultAction",
      "189": "Rule.defaultAction",
      "190": "Rule.defaultAction",
      "191": "Rule.Inline",
      "192": "Rule.Inline",
      "193": "Rule.defaultAction",
      "194": "Rule.Inline",
      "195": "Rule.ListSnoc(\"binop-expr_I1_star\", \"binop-expr_I1\", true)",
      "196": "Rule.Inline",
      "197": "Rule.defaultAction",
      "198": "Rule.defaultAction",
      "199": "Rule.defaultAction",
      "200": "Rule.defaultAction",
      "201": "Rule.defaultAction",
      "202": "Rule.defaultAction",
      "203": "Rule.defaultAction",
      "204": "Rule.defaultAction",
      "205": "Rule.defaultAction",
      "206": "Rule.defaultAction",
      "207": "Rule.defaultAction",
      "208": "Rule.defaultAction",
      "209": "Rule.defaultAction",
      "210": "Rule.defaultAction",
      "211": "Rule.defaultAction",
      "212": "Rule.defaultAction",
      "213": "Rule.defaultAction",
      "214": "Rule.defaultAction",
      "215": "Rule.defaultAction",
      "216": "Rule.defaultAction",
      "217": "Rule.defaultAction",
      "218": "Rule.defaultAction",
      "219": "Rule.defaultAction",
      "220": "Rule.defaultAction",
      "221": "Rule.defaultAction",
      "222": "Rule.defaultAction",
      "223": "Rule.defaultAction",
      "224": "Rule.defaultAction",
      "225": "Rule.defaultAction",
      "226": "Rule.defaultAction",
      "227": "Rule.defaultAction",
      "228": "Rule.defaultAction",
      "229": "Rule.defaultAction",
      "230": "Rule.defaultAction",
      "231": "Rule.defaultAction",
      "232": "Rule.defaultAction",
      "233": "Rule.defaultAction",
      "234": "Rule.defaultAction",
      "235": "Rule.defaultAction",
      "236": "Rule.defaultAction",
      "237": "Rule.defaultAction",
      "238": "Rule.defaultAction",
      "239": "Rule.defaultAction",
      "240": "Rule.defaultAction",
      "241": "Rule.defaultAction",
      "242": "Rule.defaultAction",
      "243": "Rule.defaultAction",
      "244": "Rule.defaultAction",
      "245": "Rule.defaultAction",
      "246": "Rule.defaultAction",
      "247": "Rule.defaultAction",
      "248": "Rule.defaultAction",
      "249": "Rule.defaultAction",
      "250": "Rule.defaultAction",
      "251": "Rule.defaultAction",
      "252": "Rule.defaultAction",
      "253": "Rule.defaultAction",
      "254": "Rule.defaultAction",
      "255": "Rule.defaultAction",
      "256": "Rule.defaultAction",
      "257": "Rule.defaultAction",
      "258": "Rule.defaultAction",
      "259": "Rule.defaultAction",
      "260": "Rule.defaultAction",
      "261": "Rule.defaultAction",
      "262": "Rule.defaultAction",
      "263": "Rule.defaultAction",
      "264": "Rule.defaultAction",
      "265": "Rule.defaultAction",
      "266": "Rule.defaultAction",
      "267": "Rule.defaultAction",
      "268": "Rule.defaultAction",
      "269": "Rule.Inline",
      "270": "Rule.Inline",
      "271": "Rule.defaultAction",
      "272": "Rule.defaultAction",
      "273": "Rule.defaultAction",
      "274": "Rule.defaultAction",
      "275": "Rule.defaultAction",
      "276": "Rule.defaultAction",
      "277": "Rule.defaultAction",
      "278": "Rule.defaultAction",
      "279": "Rule.defaultAction",
      "280": "Rule.defaultAction",
      "281": "Rule.defaultAction",
      "282": "Rule.defaultAction",
      "283": "Rule.defaultAction",
      "284": "Rule.Inline",
      "285": "Rule.Inline",
      "286": "Rule.defaultAction",
      "287": "Rule.defaultAction",
      "288": "Rule.Inline",
      "289": "Rule.Inline",
      "290": "Rule.defaultAction",
      "291": "Rule.defaultAction",
      "292": "Rule.defaultAction",
      "293": "Rule.Inline",
      "294": "Rule.Inline",
      "295": "Rule.Inline",
      "296": "Rule.defaultAction",
      "297": "Rule.Inline",
      "298": "Rule.ListSnoc(\"comma-binops_I1_star\", \"comma-binops_I1\", true)",
      "299": "Rule.Inline",
      "300": "Rule.defaultAction",
      "301": "Rule.Inline",
      "302": "Rule.Inline",
      "303": "Rule.Inline",
      "304": "Rule.Inline",
      "305": "Rule.Inline",
      "306": "Rule.defaultAction",
      "307": "Rule.Inline",
      "308": "Rule.ListSnoc(\"inst-expr_I3_star\", \"inst-expr_I3\", true)",
      "309": "Rule.Inline",
      "310": "Rule.defaultAction",
      "311": "Rule.defaultAction",
      "312": "Rule.Inline",
      "313": "Rule.ListSnoc(\"tuple-fields_I1_star\", \"tuple-fields_I1\", true)",
      "314": "Rule.Inline",
      "315": "Rule.Inline",
      "316": "Rule.Inline",
      "317": "Rule.Inline",
      "318": "Rule.defaultAction",
      "319": "Rule.defaultAction",
      "320": "Rule.defaultAction",
      "321": "Rule.defaultAction",
      "322": "Rule.Inline",
      "323": "Rule.ListSnoc(\"obj-fields_I1_star\", \"obj-fields_I1\", true)",
      "324": "Rule.Inline",
      "325": "Rule.Inline",
      "326": "Rule.Inline",
      "327": "Rule.Inline",
      "328": "Rule.defaultAction",
      "329": "Rule.defaultAction",
      "330": "Rule.Inline",
      "331": "Rule.Inline",
      "332": "Rule.Inline",
      "333": "Rule.defaultAction",
      "334": "Rule.Inline",
      "335": "Rule.Inline",
      "336": "Rule.defaultAction",
      "337": "Rule.Inline",
      "338": "Rule.ListSnoc(\"fields_I1_star\", \"fields_I1\", true)",
      "339": "Rule.Inline",
      "340": "Rule.Inline",
      "341": "Rule.Inline",
      "342": "Rule.Inline",
      "343": "Rule.defaultAction",
      "344": "Rule.defaultAction",
      "345": "Rule.Inline",
      "346": "Rule.Inline",
      "347": "Rule.defaultAction",
      "348": "Rule.defaultAction",
      "349": "Rule.defaultAction",
      "350": "Rule.defaultAction",
      "351": "Rule.defaultAction",
      "352": "Rule.defaultAction",
      "353": "Rule.Inline",
      "354": "Rule.Inline",
      "355": "Rule.Inline",
      "356": "Rule.Inline",
      "357": "Rule.ListSnoc(\"table-headers_I0_I0_star\", \"table-headers_I0_I0\", true)",
      "358": "Rule.Inline",
      "359": "Rule.defaultAction",
      "360": "Rule.defaultAction",
      "361": "Rule.Inline",
      "362": "Rule.Inline",
      "363": "Rule.Inline",
      "364": "Rule.defaultAction",
      "365": "Rule.Inline",
      "366": "Rule.Inline",
      "367": "Rule.Inline",
      "368": "Rule.Inline",
      "369": "Rule.ListSnoc(\"table-rows_I0_I0_star\", \"table-rows_I0_I0\", true)",
      "370": "Rule.Inline",
      "371": "Rule.defaultAction",
      "372": "Rule.defaultAction",
      "373": "Rule.Inline",
      "374": "Rule.Inline",
      "375": "Rule.Inline",
      "376": "Rule.Inline",
      "377": "Rule.ListSnoc(\"table-items_I0_I0_star\", \"table-items_I0_I0\", true)",
      "378": "Rule.Inline",
      "379": "Rule.defaultAction",
      "380": "Rule.defaultAction",
      "381": "Rule.defaultAction",
      "382": "Rule.defaultAction",
      "383": "Rule.defaultAction",
      "384": "Rule.defaultAction",
      "385": "Rule.defaultAction",
      "386": "Rule.defaultAction",
      "387": "Rule.Inline",
      "388": "Rule.Inline",
      "389": "Rule.Inline",
      "390": "Rule.ListSnoc(\"if-expr_I4_star\", \"if-expr_I4\", true)",
      "391": "Rule.Inline",
      "392": "Rule.Inline",
      "393": "Rule.Inline",
      "394": "Rule.Inline",
      "395": "Rule.defaultAction",
      "396": "Rule.defaultAction",
      "397": "Rule.Inline",
      "398": "Rule.Inline",
      "399": "Rule.Inline",
      "400": "Rule.ListSnoc(\"if-pipe-expr_I2_star\", \"if-pipe-expr_I2\", true)",
      "401": "Rule.Inline",
      "402": "Rule.Inline",
      "403": "Rule.Inline",
      "404": "Rule.Inline",
      "405": "Rule.defaultAction",
      "406": "Rule.defaultAction",
      "407": "Rule.Inline",
      "408": "Rule.Inline",
      "409": "Rule.Inline",
      "410": "Rule.defaultAction",
      "411": "Rule.Inline",
      "412": "Rule.Inline",
      "413": "Rule.Inline",
      "414": "Rule.Inline",
      "415": "Rule.ListSnoc(\"cases-args_I1_I1_star\", \"cases-args_I1_I1\", true)",
      "416": "Rule.Inline",
      "417": "Rule.defaultAction",
      "418": "Rule.Inline",
      "419": "Rule.Inline",
      "420": "Rule.Inline",
      "421": "Rule.Inline",
      "422": "Rule.Inline",
      "423": "Rule.ListSnoc(\"cases-expr_I6_star\", \"cases-expr_I6\", true)",
      "424": "Rule.Inline",
      "425": "Rule.Inline",
      "426": "Rule.Inline",
      "427": "Rule.Inline",
      "428": "Rule.defaultAction",
      "429": "Rule.Inline",
      "430": "Rule.Inline",
      "431": "Rule.Inline",
      "432": "Rule.defaultAction",
      "433": "Rule.defaultAction",
      "434": "Rule.Inline",
      "435": "Rule.Inline",
      "436": "Rule.Inline",
      "437": "Rule.Inline",
      "438": "Rule.ListSnoc(\"for-expr_I3_I1_star\", \"for-expr_I3_I1\", true)",
      "439": "Rule.Inline",
      "440": "Rule.Inline",
      "441": "Rule.Inline",
      "442": "Rule.defaultAction",
      "443": "Rule.Inline",
      "444": "Rule.Inline",
      "445": "Rule.defaultAction",
      "446": "Rule.Inline",
      "447": "Rule.ListSnoc(\"table-select_I2_star\", \"table-select_I2\", true)",
      "448": "Rule.Inline",
      "449": "Rule.defaultAction",
      "450": "Rule.Inline",
      "451": "Rule.Inline",
      "452": "Rule.Inline",
      "453": "Rule.Inline",
      "454": "Rule.ListSnoc(\"table-filter_I2_I2_star\", \"table-filter_I2_I2\", true)",
      "455": "Rule.Inline",
      "456": "Rule.defaultAction",
      "457": "Rule.Inline",
      "458": "Rule.ListSnoc(\"table-order_I4_star\", \"table-order_I4\", true)",
      "459": "Rule.Inline",
      "460": "Rule.defaultAction",
      "461": "Rule.defaultAction",
      "462": "Rule.Inline",
      "463": "Rule.Inline",
      "464": "Rule.Inline",
      "465": "Rule.Inline",
      "466": "Rule.ListSnoc(\"table-update_I2_I2_star\", \"table-update_I2_I2\", true)",
      "467": "Rule.Inline",
      "468": "Rule.defaultAction",
      "469": "Rule.Inline",
      "470": "Rule.Inline",
      "471": "Rule.Inline",
      "472": "Rule.Inline",
      "473": "Rule.ListSnoc(\"table-extend_I2_I2_star\", \"table-extend_I2_I2\", true)",
      "474": "Rule.Inline",
      "475": "Rule.defaultAction",
      "476": "Rule.Inline",
      "477": "Rule.ListSnoc(\"table-extend-fields_I0_star\", \"table-extend-fields_I0\", true)",
      "478": "Rule.Inline",
      "479": "Rule.Inline",
      "480": "Rule.Inline",
      "481": "Rule.Inline",
      "482": "Rule.defaultAction",
      "483": "Rule.defaultAction",
      "484": "Rule.Inline",
      "485": "Rule.Inline",
      "486": "Rule.Inline",
      "487": "Rule.defaultAction",
      "488": "Rule.Inline",
      "489": "Rule.Inline",
      "490": "Rule.Inline",
      "491": "Rule.defaultAction",
      "492": "Rule.Inline",
      "493": "Rule.Inline",
      "494": "Rule.Inline",
      "495": "Rule.defaultAction",
      "496": "Rule.Inline",
      "497": "Rule.ListSnoc(\"load-table-specs_I0_star\", \"load-table-specs_I0\", true)",
      "498": "Rule.Inline",
      "499": "Rule.defaultAction",
      "500": "Rule.defaultAction",
      "501": "Rule.defaultAction",
      "502": "Rule.defaultAction",
      "503": "Rule.defaultAction",
      "504": "Rule.defaultAction",
      "505": "Rule.defaultAction",
      "506": "Rule.defaultAction",
      "507": "Rule.defaultAction",
      "508": "Rule.defaultAction",
      "509": "Rule.defaultAction",
      "510": "Rule.defaultAction",
      "511": "Rule.Inline",
      "512": "Rule.ListSnoc(\"comma-ann-field_I1_star\", \"comma-ann-field_I1\", true)",
      "513": "Rule.Inline",
      "514": "Rule.defaultAction",
      "515": "Rule.Inline",
      "516": "Rule.Inline",
      "517": "Rule.Inline",
      "518": "Rule.Inline",
      "519": "Rule.Inline",
      "520": "Rule.defaultAction",
      "521": "Rule.defaultAction",
      "522": "Rule.defaultAction",
      "523": "Rule.Inline",
      "524": "Rule.ListSnoc(\"tuple-ann_I2_star\", \"tuple-ann_I2\", true)",
      "525": "Rule.Inline",
      "526": "Rule.Inline",
      "527": "Rule.Inline",
      "528": "Rule.Inline",
      "529": "Rule.defaultAction",
      "530": "Rule.Inline",
      "531": "Rule.Inline",
      "532": "Rule.Inline",
      "533": "Rule.defaultAction",
      "534": "Rule.defaultAction",
      "535": "Rule.Inline",
      "536": "Rule.Inline",
      "537": "Rule.defaultAction",
      "538": "Rule.Inline",
      "539": "Rule.Inline",
      "540": "Rule.Inline",
      "541": "Rule.Inline",
      "542": "Rule.Inline",
      "543": "Rule.defaultAction",
      "544": "Rule.Inline",
      "545": "Rule.Inline",
      "546": "Rule.defaultAction",
      "547": "Rule.Inline",
      "548": "Rule.ListSnoc(\"comma-anns_I1_star\", \"comma-anns_I1\", true)",
      "549": "Rule.Inline",
      "550": "Rule.defaultAction",
      "551": "Rule.Inline",
      "552": "Rule.Inline",
      "553": "Rule.defaultAction",
      "554": "Rule.defaultAction"
    },
    "flagsByOldId": {},
    "rules": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      129,
      130,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140,
      141,
      142,
      145,
      143,
      144,
      146,
      147,
      148,
      154,
      155,
      149,
      150,
      151,
      152,
      153,
      156,
      157,
      158,
      159,
      160,
      161,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      219,
      220,
      221,
      222,
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      230,
      231,
      232,
      233,
      234,
      235,
      236,
      237,
      238,
      239,
      240,
      241,
      242,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250,
      251,
      252,
      253,
      254,
      255,
      256,
      257,
      258,
      259,
      260,
      261,
      262,
      263,
      264,
      265,
      266,
      267,
      268,
      269,
      270,
      271,
      272,
      273,
      274,
      275,
      276,
      277,
      278,
      279,
      280,
      281,
      282,
      283,
      286,
      284,
      285,
      284,
      285,
      287,
      288,
      289,
      290,
      291,
      292,
      293,
      294,
      295,
      296,
      297,
      298,
      299,
      300,
      301,
      305,
      302,
      303,
      304,
      306,
      307,
      308,
      309,
      310,
      311,
      312,
      313,
      314,
      315,
      316,
      317,
      318,
      319,
      320,
      321,
      322,
      323,
      324,
      325,
      326,
      327,
      328,
      329,
      333,
      330,
      331,
      332,
      334,
      335,
      336,
      337,
      338,
      339,
      340,
      341,
      342,
      343,
      344,
      345,
      346,
      347,
      348,
      349,
      350,
      351,
      352,
      353,
      354,
      355,
      356,
      357,
      358,
      359,
      360,
      361,
      362,
      363,
      364,
      365,
      366,
      367,
      368,
      369,
      370,
      371,
      372,
      373,
      374,
      375,
      376,
      377,
      378,
      379,
      380,
      381,
      382,
      383,
      384,
      385,
      386,
      387,
      388,
      389,
      390,
      391,
      392,
      393,
      394,
      395,
      396,
      397,
      398,
      399,
      400,
      401,
      402,
      403,
      404,
      405,
      406,
      407,
      408,
      409,
      410,
      411,
      412,
      413,
      414,
      415,
      416,
      417,
      418,
      419,
      420,
      421,
      422,
      423,
      424,
      425,
      426,
      427,
      428,
      429,
      430,
      431,
      432,
      433,
      434,
      435,
      436,
      437,
      438,
      439,
      440,
      441,
      442,
      443,
      444,
      445,
      446,
      447,
      448,
      449,
      450,
      451,
      452,
      453,
      454,
      455,
      456,
      457,
      458,
      459,
      460,
      461,
      462,
      463,
      464,
      465,
      466,
      467,
      468,
      469,
      470,
      471,
      472,
      473,
      474,
      475,
      476,
      477,
      478,
      479,
      480,
      481,
      482,
      483,
      487,
      484,
      485,
      486,
      488,
      489,
      490,
      491,
      492,
      493,
      494,
      495,
      496,
      497,
      498,
      499,
      500,
      501,
      502,
      503,
      504,
      505,
      506,
      507,
      508,
      509,
      510,
      511,
      512,
      513,
      514,
      515,
      519,
      516,
      517,
      518,
      520,
      521,
      522,
      523,
      524,
      525,
      526,
      527,
      528,
      529,
      530,
      531,
      532,
      533,
      534,
      535,
      536,
      537,
      538,
      539,
      540,
      541,
      542,
      543,
      544,
      545,
      546,
      547,
      548,
      549,
      550,
      551,
      552,
      553,
      554
    ],
    "rnTable": [
      {
        "program": {
          "push": 1
        },
        "prelude": {
          "push": 2
        },
        "prelude_I0_opt": {
          "push": 3
        },
        "prelude_I0": {
          "push": 4
        },
        "provide-stmt": {
          "push": 5
        },
        "'PROVIDE": {
          "push": 6
        },
        "$": {
          "reductions": [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              2,
              3
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              2,
              3
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              2,
              3
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        }
      },
      {
        "$": {
          "accept": true
        }
      },
      {
        "block": {
          "push": 7
        },
        "block_I0_star": {
          "push": 8
        },
        "$": {
          "reductions": [
            [
              844,
              8
            ],
            [
              29,
              8
            ],
            [
              30,
              9
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        }
      },
      {
        "prelude_I1_opt": {
          "push": 9
        },
        "prelude_I1": {
          "push": 10
        },
        "provide-types-stmt": {
          "push": 11
        },
        "'PROVIDE-TYPES": {
          "push": 12
        },
        "$": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              5,
              4
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              5,
              4
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              937,
              103
            ],
            [
              5,
              4
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              1218,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              1267,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 13,
          "reductions": [
            [
              75,
              16
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "stmt": {
          "push": 15
        },
        "'STAR": {
          "push": 16
        },
        "type-expr": {
          "push": 17
        },
        "newtype-expr": {
          "push": 18
        },
        "spy-stmt": {
          "push": 19
        },
        "let-expr": {
          "push": 20
        },
        "fun-expr": {
          "push": 21
        },
        "data-expr": {
          "push": 22
        },
        "when-expr": {
          "push": 23
        },
        "var-expr": {
          "push": 24
        },
        "rec-expr": {
          "push": 25
        },
        "assign-expr": {
          "push": 26
        },
        "check-test": {
          "push": 27
        },
        "check-expr": {
          "push": 28
        },
        "contract-stmt": {
          "push": 29
        },
        "'SPY": {
          "push": 30
        },
        "binop-expr": {
          "push": 31
        },
        "id-expr": {
          "push": 32
        },
        "'TYPE": {
          "push": 33
        },
        "'NEWTYPE": {
          "push": 34
        },
        "toplevel-binding": {
          "push": 35
        },
        "binding": {
          "push": 36
        },
        "name-binding": {
          "push": 37
        },
        "tuple-binding": {
          "push": 38
        },
        "'LBRACE": {
          "push": 39
        },
        "name-binding_I0_opt": {
          "push": 40
        },
        "name-binding_I0": {
          "push": 41
        },
        "'SHADOW": {
          "push": 42
        },
        "multi-let-expr": {
          "push": 43
        },
        "'LET": {
          "push": 44
        },
        "'BLOCK": {
          "push": 45
        },
        "letrec-expr": {
          "push": 46
        },
        "'LETREC": {
          "push": 47
        },
        "type-let-expr": {
          "push": 48
        },
        "'TYPE-LET": {
          "push": 49
        },
        "'FUN": {
          "push": 50
        },
        "'PARENAFTERBRACE": {
          "push": 51
        },
        "check-expr_I0": {
          "push": 52
        },
        "'CHECK": {
          "push": 53
        },
        "'EXAMPLES": {
          "push": 54
        },
        "'CHECKCOLON": {
          "push": 55
        },
        "'EXAMPLESCOLON": {
          "push": 56
        },
        "'PARENSPACE": {
          "push": 57
        },
        "'DATA": {
          "push": 58
        },
        "'VAR": {
          "push": 59
        },
        "'REC": {
          "push": 60
        },
        "'WHEN": {
          "push": 61
        },
        "expr": {
          "push": 62
        },
        "paren-expr": {
          "push": 63
        },
        "prim-expr": {
          "push": 64
        },
        "lambda-expr": {
          "push": 65
        },
        "method-expr": {
          "push": 66
        },
        "app-expr": {
          "push": 67
        },
        "obj-expr": {
          "push": 68
        },
        "tuple-expr": {
          "push": 69
        },
        "tuple-get": {
          "push": 70
        },
        "dot-expr": {
          "push": 71
        },
        "template-expr": {
          "push": 72
        },
        "bracket-expr": {
          "push": 73
        },
        "get-bang-expr": {
          "push": 74
        },
        "update-expr": {
          "push": 75
        },
        "extend-expr": {
          "push": 76
        },
        "if-expr": {
          "push": 77
        },
        "if-pipe-expr": {
          "push": 78
        },
        "cases-expr": {
          "push": 79
        },
        "for-expr": {
          "push": 80
        },
        "user-block-expr": {
          "push": 81
        },
        "inst-expr": {
          "push": 82
        },
        "construct-expr": {
          "push": 83
        },
        "table-select": {
          "push": 84
        },
        "table-extend": {
          "push": 85
        },
        "table-filter": {
          "push": 86
        },
        "table-order": {
          "push": 87
        },
        "table-extract": {
          "push": 88
        },
        "table-update": {
          "push": 89
        },
        "table-expr": {
          "push": 90
        },
        "load-table-expr": {
          "push": 91
        },
        "reactor-expr": {
          "push": 92
        },
        "'DOTDOTDOT": {
          "push": 93
        },
        "paren-expr_I0": {
          "push": 94
        },
        "num-expr": {
          "push": 95
        },
        "frac-expr": {
          "push": 96
        },
        "rfrac-expr": {
          "push": 97
        },
        "bool-expr": {
          "push": 98
        },
        "string-expr": {
          "push": 99
        },
        "'NUMBER": {
          "push": 100
        },
        "'RATIONAL": {
          "push": 101
        },
        "'ROUGHRATIONAL": {
          "push": 102
        },
        "'TRUE": {
          "push": 103
        },
        "'FALSE": {
          "push": 104
        },
        "'LAM": {
          "push": 105
        },
        "'METHOD": {
          "push": 106
        },
        "'LBRACK": {
          "push": 107
        },
        "'TABLE": {
          "push": 108
        },
        "'REACTOR": {
          "push": 109
        },
        "'IF": {
          "push": 110
        },
        "'ASK": {
          "push": 111
        },
        "'CASES": {
          "push": 112
        },
        "'FOR": {
          "push": 113
        },
        "'TABLE-SELECT": {
          "push": 114
        },
        "'TABLE-FILTER": {
          "push": 115
        },
        "'TABLE-ORDER": {
          "push": 116
        },
        "'TABLE-EXTRACT": {
          "push": 117
        },
        "'TABLE-UPDATE": {
          "push": 118
        },
        "'TABLE-EXTEND": {
          "push": 119
        },
        "'LOAD-TABLE": {
          "push": 120
        }
      },
      {
        "$": {
          "reductions": [
            [
              4670,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 13,
          "reductions": [
            [
              75,
              16
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "stmt": {
          "push": 121
        },
        "block_I0": {
          "push": 122
        },
        "type-expr": {
          "push": 17
        },
        "newtype-expr": {
          "push": 18
        },
        "spy-stmt": {
          "push": 19
        },
        "let-expr": {
          "push": 20
        },
        "fun-expr": {
          "push": 21
        },
        "data-expr": {
          "push": 22
        },
        "when-expr": {
          "push": 23
        },
        "var-expr": {
          "push": 24
        },
        "rec-expr": {
          "push": 25
        },
        "assign-expr": {
          "push": 26
        },
        "check-test": {
          "push": 27
        },
        "check-expr": {
          "push": 28
        },
        "contract-stmt": {
          "push": 29
        },
        "'SPY": {
          "push": 30
        },
        "binop-expr": {
          "push": 31
        },
        "id-expr": {
          "push": 32
        },
        "'TYPE": {
          "push": 33
        },
        "'NEWTYPE": {
          "push": 34
        },
        "toplevel-binding": {
          "push": 35
        },
        "binding": {
          "push": 36
        },
        "name-binding": {
          "push": 37
        },
        "tuple-binding": {
          "push": 38
        },
        "'LBRACE": {
          "push": 39
        },
        "name-binding_I0_opt": {
          "push": 40
        },
        "name-binding_I0": {
          "push": 41
        },
        "'SHADOW": {
          "push": 42
        },
        "multi-let-expr": {
          "push": 43
        },
        "'LET": {
          "push": 44
        },
        "'BLOCK": {
          "push": 45
        },
        "letrec-expr": {
          "push": 46
        },
        "'LETREC": {
          "push": 47
        },
        "type-let-expr": {
          "push": 48
        },
        "'TYPE-LET": {
          "push": 49
        },
        "'FUN": {
          "push": 50
        },
        "'PARENAFTERBRACE": {
          "push": 51
        },
        "check-expr_I0": {
          "push": 52
        },
        "'CHECK": {
          "push": 53
        },
        "'EXAMPLES": {
          "push": 54
        },
        "'CHECKCOLON": {
          "push": 55
        },
        "'EXAMPLESCOLON": {
          "push": 56
        },
        "'PARENSPACE": {
          "push": 57
        },
        "'DATA": {
          "push": 58
        },
        "'VAR": {
          "push": 59
        },
        "'REC": {
          "push": 60
        },
        "'WHEN": {
          "push": 61
        },
        "expr": {
          "push": 62
        },
        "paren-expr": {
          "push": 63
        },
        "prim-expr": {
          "push": 64
        },
        "lambda-expr": {
          "push": 65
        },
        "method-expr": {
          "push": 66
        },
        "app-expr": {
          "push": 67
        },
        "obj-expr": {
          "push": 68
        },
        "tuple-expr": {
          "push": 69
        },
        "tuple-get": {
          "push": 70
        },
        "dot-expr": {
          "push": 71
        },
        "template-expr": {
          "push": 72
        },
        "bracket-expr": {
          "push": 73
        },
        "get-bang-expr": {
          "push": 74
        },
        "update-expr": {
          "push": 75
        },
        "extend-expr": {
          "push": 76
        },
        "if-expr": {
          "push": 77
        },
        "if-pipe-expr": {
          "push": 78
        },
        "cases-expr": {
          "push": 79
        },
        "for-expr": {
          "push": 80
        },
        "user-block-expr": {
          "push": 81
        },
        "inst-expr": {
          "push": 82
        },
        "construct-expr": {
          "push": 83
        },
        "table-select": {
          "push": 84
        },
        "table-extend": {
          "push": 85
        },
        "table-filter": {
          "push": 86
        },
        "table-order": {
          "push": 87
        },
        "table-extract": {
          "push": 88
        },
        "table-update": {
          "push": 89
        },
        "table-expr": {
          "push": 90
        },
        "load-table-expr": {
          "push": 91
        },
        "reactor-expr": {
          "push": 92
        },
        "'DOTDOTDOT": {
          "push": 93
        },
        "paren-expr_I0": {
          "push": 94
        },
        "num-expr": {
          "push": 95
        },
        "frac-expr": {
          "push": 96
        },
        "rfrac-expr": {
          "push": 97
        },
        "bool-expr": {
          "push": 98
        },
        "string-expr": {
          "push": 99
        },
        "'NUMBER": {
          "push": 100
        },
        "'RATIONAL": {
          "push": 101
        },
        "'ROUGHRATIONAL": {
          "push": 102
        },
        "'TRUE": {
          "push": 103
        },
        "'FALSE": {
          "push": 104
        },
        "'LAM": {
          "push": 105
        },
        "'METHOD": {
          "push": 106
        },
        "'LBRACK": {
          "push": 107
        },
        "'TABLE": {
          "push": 108
        },
        "'REACTOR": {
          "push": 109
        },
        "'IF": {
          "push": 110
        },
        "'ASK": {
          "push": 111
        },
        "'CASES": {
          "push": 112
        },
        "'FOR": {
          "push": 113
        },
        "'TABLE-SELECT": {
          "push": 114
        },
        "'TABLE-FILTER": {
          "push": 115
        },
        "'TABLE-ORDER": {
          "push": 116
        },
        "'TABLE-EXTRACT": {
          "push": 117
        },
        "'TABLE-UPDATE": {
          "push": 118
        },
        "'TABLE-EXTEND": {
          "push": 119
        },
        "'LOAD-TABLE": {
          "push": 120
        },
        "$": {
          "reductions": [
            [
              4672,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              4672,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              4672,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              4672,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              4672,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              4672,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              4672,
              0
            ]
          ]
        }
      },
      {
        "prelude_I2_star": {
          "push": 123
        },
        "$": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              8,
              5
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              8,
              5
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9635,
              5
            ],
            [
              8,
              5
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9775,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9823,
              0
            ]
          ]
        }
      },
      {
        "'STAR": {
          "push": 124
        },
        "record-ann": {
          "push": 125
        },
        "'LBRACE": {
          "push": 126
        }
      },
      {
        "'COLONCOLON": {
          "push": 127
        },
        "'COLONEQUALS": {
          "push": 128
        },
        "$": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10016,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              10056,
              0
            ]
          ]
        }
      },
      {
        "'END": {
          "push": 129
        }
      },
      {
        "$": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10143,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10192,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10194,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10196,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10198,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10200,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 130
        },
        "'STRING": {
          "push": 14
        },
        "spy-stmt_I1_opt": {
          "push": 131
        },
        "spy-stmt_I1": {
          "push": 132
        },
        "binop-expr": {
          "push": 133
        },
        "id-expr": {
          "push": 32
        },
        "'LBRACE": {
          "push": 134
        },
        "multi-let-expr": {
          "push": 43
        },
        "'LET": {
          "push": 44
        },
        "'BLOCK": {
          "push": 45
        },
        "letrec-expr": {
          "push": 46
        },
        "'LETREC": {
          "push": 47
        },
        "type-let-expr": {
          "push": 48
        },
        "'TYPE-LET": {
          "push": 49
        },
        "'PARENAFTERBRACE": {
          "push": 51
        },
        "'PARENSPACE": {
          "push": 57
        },
        "expr": {
          "push": 62
        },
        "paren-expr": {
          "push": 63
        },
        "prim-expr": {
          "push": 64
        },
        "lambda-expr": {
          "push": 65
        },
        "method-expr": {
          "push": 66
        },
        "app-expr": {
          "push": 67
        },
        "obj-expr": {
          "push": 68
        },
        "tuple-expr": {
          "push": 69
        },
        "tuple-get": {
          "push": 70
        },
        "dot-expr": {
          "push": 71
        },
        "template-expr": {
          "push": 72
        },
        "bracket-expr": {
          "push": 73
        },
        "get-bang-expr": {
          "push": 74
        },
        "update-expr": {
          "push": 75
        },
        "extend-expr": {
          "push": 76
        },
        "if-expr": {
          "push": 77
        },
        "if-pipe-expr": {
          "push": 78
        },
        "cases-expr": {
          "push": 79
        },
        "for-expr": {
          "push": 80
        },
        "user-block-expr": {
          "push": 81
        },
        "inst-expr": {
          "push": 82
        },
        "construct-expr": {
          "push": 83
        },
        "table-select": {
          "push": 84
        },
        "table-extend": {
          "push": 85
        },
        "table-filter": {
          "push": 86
        },
        "table-order": {
          "push": 87
        },
        "table-extract": {
          "push": 88
        },
        "table-update": {
          "push": 89
        },
        "table-expr": {
          "push": 90
        },
        "load-table-expr": {
          "push": 91
        },
        "reactor-expr": {
          "push": 92
        },
        "'DOTDOTDOT": {
          "push": 93
        },
        "paren-expr_I0": {
          "push": 94
        },
        "num-expr": {
          "push": 95
        },
        "frac-expr": {
          "push": 96
        },
        "rfrac-expr": {
          "push": 97
        },
        "bool-expr": {
          "push": 98
        },
        "string-expr": {
          "push": 99
        },
        "'NUMBER": {
          "push": 100
        },
        "'RATIONAL": {
          "push": 101
        },
        "'ROUGHRATIONAL": {
          "push": 102
        },
        "'TRUE": {
          "push": 103
        },
        "'FALSE": {
          "push": 104
        },
        "'LAM": {
          "push": 105
        },
        "'METHOD": {
          "push": 106
        },
        "'LBRACK": {
          "push": 107
        },
        "'TABLE": {
          "push": 108
        },
        "'REACTOR": {
          "push": 109
        },
        "'IF": {
          "push": 110
        },
        "'ASK": {
          "push": 111
        },
        "'CASES": {
          "push": 112
        },
        "'FOR": {
          "push": 113
        },
        "'TABLE-SELECT": {
          "push": 114
        },
        "'TABLE-FILTER": {
          "push": 115
        },
        "'TABLE-ORDER": {
          "push": 116
        },
        "'TABLE-EXTRACT": {
          "push": 117
        },
        "'TABLE-UPDATE": {
          "push": 118
        },
        "'TABLE-EXTEND": {
          "push": 119
        },
        "'LOAD-TABLE": {
          "push": 120
        },
        "'COLON": {
          "reductions": [
            [
              47,
              10
            ]
          ]
        }
      },
      {
        "check-op": {
          "push": 135
        },
        "check-op-postfix": {
          "push": 136
        },
        "'IS": {
          "push": 137
        },
        "'ISEQUALEQUAL": {
          "push": 138
        },
        "'ISEQUALTILDE": {
          "push": 139
        },
        "'ISSPACESHIP": {
          "push": 140
        },
        "'ISROUGHLY": {
          "push": 141
        },
        "'ISNOT": {
          "push": 142
        },
        "'ISNOTEQUALEQUAL": {
          "push": 143
        },
        "'ISNOTEQUALTILDE": {
          "push": 144
        },
        "'ISNOTSPACESHIP": {
          "push": 145
        },
        "'RAISES": {
          "push": 146
        },
        "'RAISESOTHER": {
          "push": 147
        },
        "'SATISFIES": {
          "push": 148
        },
        "'SATISFIESNOT": {
          "push": 149
        },
        "'RAISESSATISFIES": {
          "push": 150
        },
        "'RAISESVIOLATES": {
          "push": 151
        },
        "'RAISESNOT": {
          "push": 152
        },
        "$": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10306,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              10791,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 153
        }
      },
      {
        "'NAME": {
          "push": 154
        }
      },
      {
        "'EQUALS": {
          "push": 155
        }
      },
      {
        "'EQUALS": {
          "reductions": [
            [
              10835,
              0
            ]
          ]
        }
      },
      {
        "'FROM": {
          "reductions": [
            [
              10837,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10837,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10837,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10837,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              10837,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10837,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10837,
              0
            ]
          ]
        }
      },
      {
        "'FROM": {
          "reductions": [
            [
              10839,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10839,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10839,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10839,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              10839,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10839,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10839,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 156,
          "reductions": [
            [
              65,
              13
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "binop-expr": {
          "push": 157
        },
        "id-expr": {
          "push": 32
        },
        "ty-params": {
          "push": 158
        },
        "'LBRACE": {
          "push": 134,
          "reductions": [
            [
              65,
              13
            ]
          ]
        },
        "tuple-binding_I1_star": {
          "push": 159
        },
        "'RBRACE": {
          "push": 160
        },
        "multi-let-expr": {
          "push": 43
        },
        "'LET": {
          "push": 44
        },
        "'BLOCK": {
          "push": 45
        },
        "letrec-expr": {
          "push": 46
        },
        "'LETREC": {
          "push": 47
        },
        "type-let-expr": {
          "push": 48
        },
        "'TYPE-LET": {
          "push": 49
        },
        "fun-header": {
          "push": 161
        },
        "ty-params_I0_opt": {
          "push": 162
        },
        "ty-params_I0": {
          "push": 163
        },
        "ty-params_I0_I0": {
          "push": 164
        },
        "'LANGLE": {
          "push": 165
        },
        "'LT": {
          "push": 166
        },
        "'PARENAFTERBRACE": {
          "push": 51,
          "reductions": [
            [
              113,
              21
            ],
            [
              114,
              22
            ]
          ]
        },
        "'PARENSPACE": {
          "push": 57
        },
        "'REF": {
          "push": 167
        },
        "expr": {
          "push": 62
        },
        "paren-expr": {
          "push": 63
        },
        "prim-expr": {
          "push": 64
        },
        "lambda-expr": {
          "push": 65
        },
        "method-expr": {
          "push": 66
        },
        "app-expr": {
          "push": 67
        },
        "obj-expr": {
          "push": 68
        },
        "tuple-expr": {
          "push": 69
        },
        "tuple-get": {
          "push": 70
        },
        "dot-expr": {
          "push": 71
        },
        "template-expr": {
          "push": 72
        },
        "bracket-expr": {
          "push": 73
        },
        "get-bang-expr": {
          "push": 74
        },
        "update-expr": {
          "push": 75
        },
        "extend-expr": {
          "push": 76
        },
        "if-expr": {
          "push": 77
        },
        "if-pipe-expr": {
          "push": 78
        },
        "cases-expr": {
          "push": 79
        },
        "for-expr": {
          "push": 80
        },
        "user-block-expr": {
          "push": 81
        },
        "inst-expr": {
          "push": 82
        },
        "construct-expr": {
          "push": 83
        },
        "table-select": {
          "push": 84
        },
        "table-extend": {
          "push": 85
        },
        "table-filter": {
          "push": 86
        },
        "table-order": {
          "push": 87
        },
        "table-extract": {
          "push": 88
        },
        "table-update": {
          "push": 89
        },
        "table-expr": {
          "push": 90
        },
        "load-table-expr": {
          "push": 91
        },
        "reactor-expr": {
          "push": 92
        },
        "'DOTDOTDOT": {
          "push": 93
        },
        "paren-expr_I0": {
          "push": 94
        },
        "num-expr": {
          "push": 95
        },
        "frac-expr": {
          "push": 96
        },
        "rfrac-expr": {
          "push": 97
        },
        "bool-expr": {
          "push": 98
        },
        "string-expr": {
          "push": 99
        },
        "'NUMBER": {
          "push": 100
        },
        "'RATIONAL": {
          "push": 101
        },
        "'ROUGHRATIONAL": {
          "push": 102
        },
        "'TRUE": {
          "push": 103
        },
        "'FALSE": {
          "push": 104
        },
        "'LAM": {
          "push": 105
        },
        "'METHOD": {
          "push": 168
        },
        "tuple-fields": {
          "push": 169
        },
        "obj-fields": {
          "push": 170
        },
        "obj-field": {
          "push": 171
        },
        "key": {
          "push": 172
        },
        "'LBRACK": {
          "push": 107
        },
        "'TABLE": {
          "push": 108
        },
        "'REACTOR": {
          "push": 109
        },
        "'IF": {
          "push": 110
        },
        "'ASK": {
          "push": 111
        },
        "'CASES": {
          "push": 112
        },
        "'FOR": {
          "push": 113
        },
        "'TABLE-SELECT": {
          "push": 114
        },
        "'TABLE-FILTER": {
          "push": 115
        },
        "'TABLE-ORDER": {
          "push": 116
        },
        "'TABLE-EXTRACT": {
          "push": 117
        },
        "'TABLE-UPDATE": {
          "push": 118
        },
        "'TABLE-EXTEND": {
          "push": 119
        },
        "'LOAD-TABLE": {
          "push": 120
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              113,
              21
            ],
            [
              114,
              22
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              65,
              13
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 173
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11186,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11188,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11190,
              0
            ]
          ]
        }
      },
      {
        "let-expr": {
          "push": 174
        },
        "var-expr": {
          "push": 175
        },
        "toplevel-binding": {
          "push": 35
        },
        "binding": {
          "push": 36
        },
        "name-binding": {
          "push": 37
        },
        "tuple-binding": {
          "push": 38
        },
        "'LBRACE": {
          "push": 176
        },
        "name-binding_I0_opt": {
          "push": 40
        },
        "name-binding_I0": {
          "push": 41
        },
        "'SHADOW": {
          "push": 42
        },
        "let-binding": {
          "push": 177
        },
        "'VAR": {
          "push": 59
        },
        "'NAME": {
          "reductions": [
            [
              75,
              16
            ]
          ]
        }
      },
      {
        "block": {
          "push": 178
        },
        "block_I0_star": {
          "push": 8
        },
        "'NAME": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              29,
              8
            ],
            [
              30,
              9
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11317,
              0
            ]
          ]
        }
      },
      {
        "let-expr": {
          "push": 179
        },
        "toplevel-binding": {
          "push": 35
        },
        "binding": {
          "push": 36
        },
        "name-binding": {
          "push": 37
        },
        "tuple-binding": {
          "push": 38
        },
        "'LBRACE": {
          "push": 176
        },
        "name-binding_I0_opt": {
          "push": 40
        },
        "name-binding_I0": {
          "push": 41
        },
        "'SHADOW": {
          "push": 42
        },
        "'NAME": {
          "reductions": [
            [
              75,
              16
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11393,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 180
        },
        "'NEWTYPE": {
          "push": 181
        },
        "type-bind": {
          "push": 182
        },
        "newtype-bind": {
          "push": 183
        },
        "type-let-bind": {
          "push": 184
        }
      },
      {
        "'NAME": {
          "push": 185
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11483,
              0
            ]
          ]
        }
      },
      {
        "block": {
          "push": 186
        },
        "'STRING": {
          "push": 187,
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "block_I0_star": {
          "push": 8
        },
        "'NAME": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              29,
              8
            ],
            [
              30,
              9
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11519,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11565,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11611,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11657,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11703,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 188
        }
      },
      {
        "toplevel-binding": {
          "push": 189
        },
        "binding": {
          "push": 36
        },
        "name-binding": {
          "push": 37
        },
        "tuple-binding": {
          "push": 38
        },
        "'LBRACE": {
          "push": 176
        },
        "name-binding_I0_opt": {
          "push": 40
        },
        "name-binding_I0": {
          "push": 41
        },
        "'SHADOW": {
          "push": 42
        },
        "'NAME": {
          "reductions": [
            [
              75,
              16
            ]
          ]
        }
      },
      {
        "toplevel-binding": {
          "push": 190
        },
        "binding": {
          "push": 36
        },
        "name-binding": {
          "push": 37
        },
        "tuple-binding": {
          "push": 38
        },
        "'LBRACE": {
          "push": 176
        },
        "name-binding_I0_opt": {
          "push": 40
        },
        "name-binding_I0": {
          "push": 41
        },
        "'SHADOW": {
          "push": 42
        },
        "'NAME": {
          "reductions": [
            [
              75,
              16
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 130
        },
        "'STRING": {
          "push": 14
        },
        "binop-expr": {
          "push": 191
        },
        "id-expr": {
          "push": 32
        },
        "'LBRACE": {
          "push": 134
        },
        "multi-let-expr": {
          "push": 43
        },
        "'LET": {
          "push": 44
        },
        "'BLOCK": {
          "push": 45
        },
        "letrec-expr": {
          "push": 46
        },
        "'LETREC": {
          "push": 47
        },
        "type-let-expr": {
          "push": 48
        },
        "'TYPE-LET": {
          "push": 49
        },
        "'PARENAFTERBRACE": {
          "push": 51
        },
        "'PARENSPACE": {
          "push": 57
        },
        "expr": {
          "push": 62
        },
        "paren-expr": {
          "push": 63
        },
        "prim-expr": {
          "push": 64
        },
        "lambda-expr": {
          "push": 65
        },
        "method-expr": {
          "push": 66
        },
        "app-expr": {
          "push": 67
        },
        "obj-expr": {
          "push": 68
        },
        "tuple-expr": {
          "push": 69
        },
        "tuple-get": {
          "push": 70
        },
        "dot-expr": {
          "push": 71
        },
        "template-expr": {
          "push": 72
        },
        "bracket-expr": {
          "push": 73
        },
        "get-bang-expr": {
          "push": 74
        },
        "update-expr": {
          "push": 75
        },
        "extend-expr": {
          "push": 76
        },
        "if-expr": {
          "push": 77
        },
        "if-pipe-expr": {
          "push": 78
        },
        "cases-expr": {
          "push": 79
        },
        "for-expr": {
          "push": 80
        },
        "user-block-expr": {
          "push": 81
        },
        "inst-expr": {
          "push": 82
        },
        "construct-expr": {
          "push": 83
        },
        "table-select": {
          "push": 84
        },
        "table-extend": {
          "push": 85
        },
        "table-filter": {
          "push": 86
        },
        "table-order": {
          "push": 87
        },
        "table-extract": {
          "push": 88
        },
        "table-update": {
          "push": 89
        },
        "table-expr": {
          "push": 90
        },
        "load-table-expr": {
          "push": 91
        },
        "reactor-expr": {
          "push": 92
        },
        "'DOTDOTDOT": {
          "push": 93
        },
        "paren-expr_I0": {
          "push": 94
        },
        "num-expr": {
          "push": 95
        },
        "frac-expr": {
          "push": 96
        },
        "rfrac-expr": {
          "push": 97
        },
        "bool-expr": {
          "push": 98
        },
        "string-expr": {
          "push": 99
        },
        "'NUMBER": {
          "push": 100
        },
        "'RATIONAL": {
          "push": 101
        },
        "'ROUGHRATIONAL": {
          "push": 102
        },
        "'TRUE": {
          "push": 103
        },
        "'FALSE": {
          "push": 104
        },
        "'LAM": {
          "push": 105
        },
        "'METHOD": {
          "push": 106
        },
        "'LBRACK": {
          "push": 107
        },
        "'TABLE": {
          "push": 108
        },
        "'REACTOR": {
          "push": 109
        },
        "'IF": {
          "push": 110
        },
        "'ASK": {
          "push": 111
        },
        "'CASES": {
          "push": 112
        },
        "'FOR": {
          "push": 113
        },
        "'TABLE-SELECT": {
          "push": 114
        },
        "'TABLE-FILTER": {
          "push": 115
        },
        "'TABLE-ORDER": {
          "push": 116
        },
        "'TABLE-EXTRACT": {
          "push": 117
        },
        "'TABLE-UPDATE": {
          "push": 118
        },
        "'TABLE-EXTEND": {
          "push": 119
        },
        "'LOAD-TABLE": {
          "push": 120
        }
      },
      {
        "'PARENNOSPACE": {
          "push": 192
        },
        "'LANGLE": {
          "push": 193
        },
        "binop-expr_I1_star": {
          "push": 194
        },
        "app-args": {
          "push": 195
        },
        "'DOT": {
          "push": 196
        },
        "'LBRACK": {
          "push": 197,
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'BANG": {
          "push": 198
        },
        "$": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11743,
              41
            ],
            [
              194,
              41
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12166,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12204,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12242,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12280,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12318,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12356,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12394,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12432,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12470,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12508,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12546,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12584,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12622,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12660,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12698,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12736,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12774,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12812,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12850,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12888,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12926,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12964,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              13002,
              0
            ]
          ]
        },
  };