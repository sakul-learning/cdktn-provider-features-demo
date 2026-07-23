// generated from provider function schema

import * as cdktn from 'cdktn';

/**
* Provider-defined functions of the cfncompat provider.
*/
export class CfncompatProviderFunctions {
  private readonly providerLocalName: string;

  /**
  * @param providerLocalName The local name of the provider in required_providers; defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.
  */
  constructor(providerLocalName: string) {
    this.providerLocalName = providerLocalName;
  }

  /**
  * Returns the Base64 representation of the input string, matching the semantics of CloudFormation's [`Fn::Base64`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-base64.html) intrinsic function. This is typically used to pass encoded data (e.g. EC2 `UserData`) through Terraform configuration that mirrors a CloudFormation template.
  * @param {string} content - The string value to convert to Base64 (CloudFormation's `valueToEncode` parameter).
  * @returns {string}
  */
  public base64(content: string): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "base64", [content]));
  }

  /**
  * Returns an array of `count` CIDR address blocks, split from `ip_block`.
  * 
  * Matches the semantics of CloudFormation's [`Fn::Cidr`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-cidr.html) intrinsic function.
  * 
  * `cidr_bits` is the number of subnet bits for the generated CIDRs: the resulting prefix length is `32 - cidr_bits` for an IPv4 `ip_block`, or `128 - cidr_bits` for an IPv6 `ip_block`. For example, `cidr_bits = 8` against an IPv4 block produces `/24` subnets. `count` must be between 1 and 256. Subnets are allocated consecutively starting from the beginning of `ip_block`, and `ip_block` must be large enough to contain `count` subnets of the requested size. Both IPv4 and IPv6 blocks are supported.
  * @param {string} ipBlock - The user-specified CIDR address block (IPv4 or IPv6) to be split into smaller CIDR blocks.
  * @param {number} count - The number of CIDRs to generate. Valid range is between 1 and 256.
  * @param {number} cidrBits - The number of subnet bits for the CIDR. The resulting prefix length is `32 - cidr_bits` (IPv4) or `128 - cidr_bits` (IPv6).
  * @returns {Array<string>}
  */
  public cidr(ipBlock: string, count: number, cidrBits: number): string[] {
    return cdktn.Token.asList(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "cidr", [ipBlock, count, cidrBits]));
  }

  /**
  * Returns `true` if all the specified `conditions` evaluate to `true`, or returns `false` if any one of the conditions evaluates to `false`. Acts as an AND operator.
  * 
  * Matches the semantics of CloudFormation's [`Fn::And`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-conditions.html#intrinsic-function-reference-conditions-and) intrinsic function (CDK binding: `Fn.conditionAnd`).
  * 
  * CloudFormation's `Fn::And` takes a list of condition expressions (references to named `Conditions`, or nested condition functions) that CloudFormation evaluates lazily. This provider function instead takes already-evaluated boolean values as its `conditions` — the synthesis backend is responsible for evaluating any nested condition expressions to booleans before calling this function.
  * 
  * The minimum number of `conditions` you can include is 2, and the maximum is 10.
  * @param {Array<boolean | IResolvable>} conditions - A condition that evaluates to `true` or `false`. Minimum 2, maximum 10.
  * @returns {boolean | IResolvable}
  */
  public conditionAnd(conditions: Array<boolean | cdktn.IResolvable>): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "condition_and", [...conditions]);
  }

  /**
  * Returns `true` if `value` matches at least one member of `list_of_strings`.
  * 
  * Matches the semantics of CloudFormation's [`Fn::Contains`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-rules.html#fn-contains) function. CloudFormation classifies `Fn::Contains` as a [rule-specific intrinsic function](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/rules-section-structure.html#template-constraint-rules-syntax): in a template it is only valid within the `RuleCondition` or `Assert` fields of the template's `Rules` section, not as a general-purpose intrinsic used in `Resources` or `Outputs`. As a `provider::cfncompat::*` function it has no such placement restriction and can be called anywhere a boolean value is needed.
  * 
  * `list_of_strings` must not be null and must not contain null entries.
  * @param {Array<string>} listOfStrings - The list of strings to search.
  * @param {string} value - The string to compare against the list of strings.
  * @returns {boolean | IResolvable}
  */
  public conditionContains(listOfStrings: string[], value: string): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "condition_contains", [listOfStrings, value]);
  }

  /**
  * Returns `true` if every member of `list_of_strings` equals `value`, mirroring CloudFormation's rule-specific [`Fn::EachMemberEquals`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-rules.html#fn-eachmemberequals) intrinsic function.
  * 
  * AWS's documentation does not specify the behavior when `list_of_strings` is empty. This provider chooses vacuous truth: an empty list returns `true`, since "every member equals value" is trivially satisfied when there are no members.
  * 
  * In CloudFormation, `Fn::EachMemberEquals` is a Rules-section-only function typically used with `Fn::ValueOfAll` to validate that a tag or attribute is consistent across every AWS-specific parameter of a given type; this provider-function form operates directly on an already-resolved list of strings rather than on template Rules-section constructs like `Fn::ValueOfAll`.
  * @param {Array<string>} listOfStrings - The list of strings to compare against `value`. Every member must equal `value` for the function to return `true`. An empty list returns `true`.
  * @param {string} value - The string value that every member of `list_of_strings` is compared against.
  * @returns {boolean | IResolvable}
  */
  public conditionEachMemberEquals(listOfStrings: string[], value: string): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "condition_each_member_equals", [listOfStrings, value]);
  }

  /**
  * Returns `true` if each member in `strings_to_check` is present in `strings_to_match`, and `false` otherwise.
  * 
  * Matches the semantics of CloudFormation's [`Fn::EachMemberIn`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-rules.html#fn-eachmemberin) rule-specific intrinsic function.
  * 
  * **Empty `strings_to_check`:** the AWS documentation does not specify a result for an empty `strings_to_check` list. This implementation returns `true` (vacuous truth: there are no members of `strings_to_check` that fail to appear in `strings_to_match`), matching how universally-quantified checks over an empty set are conventionally defined.
  * 
  * **Deviation from CloudFormation:** in a CloudFormation template, `Fn::EachMemberIn` is normally used together with `Fn::ValueOfAll` and `Fn::RefAll` to compare attribute values across every parameter of a given AWS-specific parameter type. Those two functions depend on template-wide `Parameters` declarations and stack-account/Region context that this provider-defined function form has no access to; callers must resolve `strings_to_check` and `strings_to_match` to concrete lists of strings themselves before calling this function.
  * @param {Array<string>} stringsToCheck - A list of strings. Every member of this list is checked for membership in `strings_to_match`.
  * @param {Array<string>} stringsToMatch - A list of strings that each member of `strings_to_check` is compared against.
  * @returns {boolean | IResolvable}
  */
  public conditionEachMemberIn(stringsToCheck: string[], stringsToMatch: string[]): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "condition_each_member_in", [stringsToCheck, stringsToMatch]);
  }

  /**
  * Compares if two values are equal. Returns `true` if the two values are equal, or `false` if they aren't.
  * 
  * Matches the semantics of CloudFormation's [`Fn::Equals`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-conditions.html#intrinsic-function-reference-conditions-equals) intrinsic function.
  * 
  * **Coercion rule:** CloudFormation template values are fundamentally strings, so `value_1` and `value_2` are compared by their canonical string representation rather than by native type: a string compares as-is, a number compares by its canonical decimal representation (so `1`, `1.0`, and `"1"` are all equal, and `-0` is equal to `0`), and a boolean compares as the literal `true` or `false`. `value_1` and `value_2` must each be a string, number, or boolean, and must not be null; non-primitive arguments (list, set, map/object, or tuple) and null arguments produce an error.
  * @param {any} value1 - The first value to compare. Must be a string, number, or boolean.
  * @param {any} value2 - The second value to compare. Must be a string, number, or boolean.
  * @returns {boolean | IResolvable}
  */
  public conditionEquals(value1: any, value2: any): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "condition_equals", [value1, value2]);
  }

  /**
  * Returns `value_if_true` if `condition` evaluates to `true`, or `value_if_false` if `condition` evaluates to `false`.
  * 
  * Matches the semantics of CloudFormation's [`Fn::If`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-conditions.html#intrinsic-function-reference-conditions-if) intrinsic function.
  * 
  * **Deviation from `Fn::If`:** in a CloudFormation template, `Fn::If`'s first argument is the *name* of a condition declared in the template's `Conditions` section (for example `!If [CreateNewSecurityGroup, ..., ...]`), and CloudFormation resolves that name to a boolean by evaluating the referenced condition at stack create/update time. This provider function has no template `Conditions` section to resolve names against, so `condition` here is the already-evaluated **boolean value** of that condition — the CDK Terrain synthesis backend is responsible for evaluating the named condition (typically itself built from `provider::cfncompat::condition_*` function calls) and passing the resulting boolean through.
  * 
  * `value_if_true` and `value_if_false` accept any type and are not required to share a type with each other, since only one of them is ever returned; the return type is dynamic to accommodate this. Only the selected branch is validated (e.g. for unknown-ness) — the branch that is not selected is ignored entirely, matching CloudFormation's lazy evaluation of `Fn::If` branches.
  * @param {boolean | IResolvable} condition - The already-evaluated boolean value of the named condition `Fn::If` would reference in a template's `Conditions` section.
  * @param {any} valueIfTrue - The value to return if `condition` is `true`. Omit or pass cdktn.Token.nullValue() to render the Terraform null keyword.
  * @param {any} valueIfFalse - The value to return if `condition` is `false`. Omit or pass cdktn.Token.nullValue() to render the Terraform null keyword.
  * @returns {any}
  */
  public conditionIf(condition: boolean | cdktn.IResolvable, valueIfTrue?: any, valueIfFalse?: any): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "condition_if", [condition, valueIfTrue, valueIfFalse]);
  }

  /**
  * Returns `true` for a `condition` that evaluates to `false`, or `false` for a `condition` that evaluates to `true`. `Fn::Not` acts as a NOT operator.
  * 
  * Matches the semantics of CloudFormation's [`Fn::Not`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-conditions.html#intrinsic-function-reference-conditions-not) intrinsic function.
  * 
  * **Deviation from CloudFormation:** `Fn::Not` takes a single-element list containing the condition (`"Fn::Not": [{{condition}}]`). As a provider-defined function, which does not support single-element list arguments distinct from scalars, `condition_not` instead takes the condition directly as a single boolean argument.
  * @param {boolean | IResolvable} condition - A condition that evaluates to `true` or `false`.
  * @returns {boolean | IResolvable}
  */
  public conditionNot(condition: boolean | cdktn.IResolvable): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "condition_not", [condition]);
  }

  /**
  * Returns `true` if any one of the specified `conditions` evaluates to `true`, or returns `false` if all the conditions evaluate to `false`. Acts as an OR operator.
  * 
  * Matches the semantics of CloudFormation's [`Fn::Or`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-conditions.html#intrinsic-function-reference-conditions-or) intrinsic function (CDK binding: `Fn.conditionOr`).
  * 
  * CloudFormation's `Fn::Or` takes a list of condition expressions (references to named `Conditions`, or nested condition functions) that CloudFormation evaluates lazily. This provider function instead takes already-evaluated boolean values as its `conditions` - the synthesis backend is responsible for evaluating any nested condition expressions to booleans before calling this function.
  * 
  * The minimum number of `conditions` you can include is 2, and the maximum is 10.
  * @param {Array<boolean | IResolvable>} conditions - A condition that evaluates to `true` or `false`. Minimum 2, maximum 10.
  * @returns {boolean | IResolvable}
  */
  public conditionOr(conditions: Array<boolean | cdktn.IResolvable>): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "condition_or", [...conditions]);
  }

  /**
  * Returns the value corresponding to `top_level_key` and `second_level_key` in the two-level `mapping`.
  * 
  * Matches the semantics of CloudFormation's [`Fn::FindInMap`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-findinmap.html) intrinsic function.
  * 
  * **Deviation from template-form CloudFormation:** in a CloudFormation template, `Fn::FindInMap`'s first argument is the *logical name* of a mapping declared in the template's `Mappings` section. This provider function has no `Mappings` section to resolve a name against, so it takes the mapping *itself* as the first argument: `mapping` is a two-level object/map (`top_level_key` -> `second_level_key` -> leaf value), where each leaf value is either a string or a list of strings, matching the value shapes CloudFormation allows in a `Mappings` entry.
  * 
  * If `top_level_key` or `second_level_key` is not present in `mapping`, this function raises an error naming the missing key and the level (top-level or second-level) it was expected at - unless a `default_value` argument is supplied, in which case that default is returned instead. This mirrors the optional `DefaultValue` parameter of CloudFormation's `Fn::FindInMap` (a standard parameter that no longer requires the `AWS::LanguageExtensions` transform). `default_value` is variadic and accepts zero or one arguments; supplying more than one is an error.
  * @param {any} mapping - The two-level mapping to search: `top_level_key` -> `second_level_key` -> value, where each value is a string or a list of strings. Accepts either an object or a map as the underlying dynamic type, at both levels.
  * @param {string} topLevelKey - The top-level key name to look up in `mapping`.
  * @param {string} secondLevelKey - The second-level key name to look up in the entry selected by `top_level_key`.
  * @param {Array<any>} defaultValue - Optional fallback value returned if `top_level_key` or `second_level_key` is not found in `mapping` (CloudFormation's standard `Fn::FindInMap` `DefaultValue` parameter). Zero or one arguments are accepted; supplying more than one is an error. If omitted and a key is not found, this function raises an error instead.
  * @returns {any}
  */
  public findInMap(mapping: any, topLevelKey: string, secondLevelKey: string, defaultValue: Array<any>): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "find_in_map", [mapping, topLevelKey, secondLevelKey, ...defaultValue]);
  }

  /**
  * Appends a set of values into a single value, separated by the specified `delimiter`. If `delimiter` is the empty string, the values are concatenated with no delimiter.
  * 
  * Matches the semantics of CloudFormation's [`Fn::Join`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-join.html) intrinsic function.
  * 
  * The delimiter occurs between fragments only; it never terminates the final value. An empty `values` list returns the empty string. Every element of `values` must be a known, non-null string (CloudFormation's `Fn::Join` list of values must not contain null entries).
  * @param {string} delimiter - The value to occur between fragments. Occurs between fragments only; does not terminate the final value.
  * @param {Array<string>} values - The list of string values to combine.
  * @returns {string}
  */
  public join(delimiter: string, values: string[]): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "join", [delimiter, values]));
  }

  /**
  * Returns the number of elements within an array.
  * 
  * Matches the semantics of CloudFormation's [`Fn::Length`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-length.html) intrinsic function, which **requires the `AWS::LanguageExtensions` transform** to be enabled on the CloudFormation template in order to be used. AWS CDK exposes this intrinsic as `Fn.len`; the generated CDKTN TypeScript binding for this provider function is `lengthOf` (`length` collides with the built-in array/string property name in TypeScript/JavaScript).
  * 
  * `value` accepts a list, tuple, or set (CloudFormation's `Fn::Length` operates on the array produced by a `Ref`, a nested intrinsic function such as `Fn::Split`, or a literal array). Any other underlying type — a string, number, boolean, or map/object — is an error; the AWS documentation only documents array inputs for this function, so this provider does not attempt to guess a length for non-array values (e.g. treating a string's character count as its "length").
  * @param {any} value - The list, tuple, or set to count the elements of.
  * @returns {number}
  */
  public lengthOf(value: any): number {
    return cdktn.Token.asNumber(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "length", [value]));
  }

  /**
  * Returns a single object from a list of objects by `index`.
  * 
  * Matches the semantics of CloudFormation's [`Fn::Select`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-select.html) intrinsic function.
  * 
  * `index` must be a value from zero to N-1, where N represents the number of elements in `objects`. `objects` must not be null, nor can it have null entries; CloudFormation documents both conditions as resulting in a stack error, so this function returns an error rather than a partial/best-effort result.
  * 
  * `objects` accepts either a list or a tuple, so it can represent both CloudFormation's homogeneous lists (e.g. a resolved `CommaDelimitedList` parameter) and heterogeneous tuples produced by other `provider::cfncompat::*` functions. The return type is dynamic because tuple elements may be of any type.
  * @param {number} index - The index of the object to retrieve, from zero to N-1 where N is the number of elements in `objects`.
  * @param {any} objects - The list (or tuple) of objects to select from. Must not be null, nor can it have null entries.
  * @returns {any}
  */
  public select(index: number, objects: any): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "select", [index, objects]);
  }

  /**
  * Splits `source` into a list of strings at each occurrence of `delimiter`, mirroring CloudFormation's [`Fn::Split`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-split.html) intrinsic function.
  * 
  * Consecutive occurrences of the delimiter (or a delimiter at the start/end of `source`) produce empty string entries in the result, e.g. `split("|", "a||c|")` returns `["a", "", "c", ""]`.
  * 
  * `delimiter` must be a non-empty string; CloudFormation does not document behavior for an empty delimiter, so this provider treats it as an error rather than guessing at undocumented Go-specific splitting behavior.
  * @param {string} delimiter - The string value that determines where the source string is divided. Must not be empty.
  * @param {string} source - The string value to split.
  * @returns {Array<string>}
  */
  public split(delimiter: string, source: string): string[] {
    return cdktn.Token.asList(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "split", [delimiter, source]));
  }

  /**
  * Implements the [`Fn::Sub`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-sub.html) intrinsic function.
  * 
  * Every `${VarName}` occurrence in `template` is replaced with `variables["VarName"]`. Write `${!VarName}` to produce the literal text `${VarName}` without performing a lookup (the `!` is stripped and the rest of the substitution is left untouched). Substituted values are **not** re-scanned for further `${...}` substitution (no recursion).
  * 
  * **Deviation from CloudFormation**: in a CloudFormation template, `${Name}` may also refer to a template parameter name, a resource logical ID, or a resource attribute (`${MyInstance.PublicIp}`), which CloudFormation resolves the same way as `Ref`/`Fn::GetAtt`. This provider function has no access to a template's parameters/resources, so it only supports the explicit key-value `variables` map form of `Fn::Sub`. Any such name must be resolved by the calling synthesis backend (e.g. CDK Terrain) into an explicit entry of `variables` before calling this function — `${Name}` with no matching entry in `variables` is an error.
  * @param {string} template - The string containing `${VarName}` placeholders to substitute.
  * @param {{ [key: string]: string }} variables - A map of variable name to variable value used to resolve `${VarName}` placeholders in `template`.
  * @returns {string}
  */
  public sub(template: string, variables: { [key: string]: string }): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "sub", [template, variables]));
  }

  /**
  * Implements CloudFormation's [`Fn::ToJsonString`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-ToJsonString.html) intrinsic function (`AWS::LanguageExtensions`) / AWS CDK's `Fn.toJsonString()`.
  * 
  * **Deviation from CFN template syntax:** in a CloudFormation template, `Fn::ToJsonString` requires the `AWS::LanguageExtensions` transform to be declared, and its documented syntax only shows an `Object` or `Array` as the top-level argument. As a provider-defined function this is a pure serializer with no transform to declare, so `value` may be any dynamic value — object/map, list/tuple, or primitive (string/number/bool), including `null`, arbitrarily nested — matching AWS CDK's `Fn.toJsonString(value: any)`, which likewise accepts any value. When CDK synthesizes a CloudFormation template that calls `Fn.toJsonString()`, CDK automatically adds the `AWS::LanguageExtensions` transform to the template on your behalf; this function is the synth-time equivalent used before that template exists.
  * 
  * `value` is serialized to compact JSON (no extraneous whitespace). Object/map keys are sorted lexicographically byte-wise so output is deterministic regardless of input key order (CloudFormation does not document a specific key order for `Fn::ToJsonString`, and Go maps are unordered, so this function imposes and documents sorted-key output). Numbers are rendered as canonical decimal literals (shortest round-tripping representation, no trailing zeros, no scientific notation) for typical values; extremely large or small magnitudes may still require many digits since JSON has no exponent-free size limit guarantee.
  * 
  * Matches the official example: `{"key1": "value1", "key2": <resolved-value>}` serializes to `"{\"key1\":\"value1\",\"key2\":\"resolved-value\"}"`.
  * @param {any} value - The value (object/map, list/tuple, or primitive, arbitrarily nested) to convert to a JSON string.
  * @returns {string}
  */
  public toJsonString(value: any): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "to_json_string", [value]));
  }
}
