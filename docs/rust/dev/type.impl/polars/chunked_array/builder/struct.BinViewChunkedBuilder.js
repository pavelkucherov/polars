(function() {var type_impls = {
"polars":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BinViewChunkedBuilder%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/builder/string.rs.html#20\">source</a><a href=\"#impl-BinViewChunkedBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"polars/chunked_array/builder/struct.BinViewChunkedBuilder.html\" title=\"struct polars::chunked_array::builder::BinViewChunkedBuilder\">BinViewChunkedBuilder</a>&lt;T&gt;<div class=\"where\">where\n    T: ViewType + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/builder/string.rs.html#27\">source</a><h4 class=\"code-header\">pub fn <a href=\"polars/chunked_array/builder/struct.BinViewChunkedBuilder.html#tymethod.new\" class=\"fn\">new</a>(name: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"struct\" href=\"polars/chunked_array/builder/struct.BinViewChunkedBuilder.html\" title=\"struct polars::chunked_array::builder::BinViewChunkedBuilder\">BinViewChunkedBuilder</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new StringChunkedBuilder</p>\n<h5 id=\"arguments\"><a href=\"#arguments\">Arguments</a></h5>\n<ul>\n<li><code>capacity</code> - Number of string elements in the final array.</li>\n<li><code>bytes_capacity</code> - Number of bytes needed to store the string values.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_value\" class=\"method\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/builder/string.rs.html#36\">source</a><h4 class=\"code-header\">pub fn <a href=\"polars/chunked_array/builder/struct.BinViewChunkedBuilder.html#tymethod.append_value\" class=\"fn\">append_value</a>&lt;S&gt;(&amp;mut self, v: S)<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Appends a value of type <code>T</code> into the builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_null\" class=\"method\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/builder/string.rs.html#42\">source</a><h4 class=\"code-header\">pub fn <a href=\"polars/chunked_array/builder/struct.BinViewChunkedBuilder.html#tymethod.append_null\" class=\"fn\">append_null</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Appends a null slot into the builder</p>\n</div></details><section id=\"method.append_option\" class=\"method\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/builder/string.rs.html#47\">source</a><h4 class=\"code-header\">pub fn <a href=\"polars/chunked_array/builder/struct.BinViewChunkedBuilder.html#tymethod.append_option\" class=\"fn\">append_option</a>&lt;S&gt;(&amp;mut self, opt: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;S&gt;)<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt;,</div></h4></section></div></details>",0,"polars::chunked_array::builder::BinaryChunkedBuilder","polars::chunked_array::builder::StringChunkedBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BinViewChunkedBuilder%3Cstr%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/builder/string.rs.html#52\">source</a><a href=\"#impl-BinViewChunkedBuilder%3Cstr%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"polars/chunked_array/builder/struct.BinViewChunkedBuilder.html\" title=\"struct polars::chunked_array::builder::BinViewChunkedBuilder\">BinViewChunkedBuilder</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.finish\" class=\"method\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/builder/string.rs.html#53\">source</a><h4 class=\"code-header\">pub fn <a href=\"polars/chunked_array/builder/struct.BinViewChunkedBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(self) -&gt; <a class=\"struct\" href=\"polars/chunked_array/struct.ChunkedArray.html\" title=\"struct polars::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;<a class=\"struct\" href=\"polars/datatypes/struct.StringType.html\" title=\"struct polars::datatypes::StringType\">StringType</a>&gt;</h4></section></div></details>",0,"polars::chunked_array::builder::StringChunkedBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BinViewChunkedBuilder%3C%5Bu8%5D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/builder/string.rs.html#68\">source</a><a href=\"#impl-BinViewChunkedBuilder%3C%5Bu8%5D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"polars/chunked_array/builder/struct.BinViewChunkedBuilder.html\" title=\"struct polars::chunked_array::builder::BinViewChunkedBuilder\">BinViewChunkedBuilder</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.finish\" class=\"method\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/builder/string.rs.html#69\">source</a><h4 class=\"code-header\">pub fn <a href=\"polars/chunked_array/builder/struct.BinViewChunkedBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(self) -&gt; <a class=\"struct\" href=\"polars/chunked_array/struct.ChunkedArray.html\" title=\"struct polars::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;<a class=\"struct\" href=\"polars/datatypes/struct.BinaryType.html\" title=\"struct polars::datatypes::BinaryType\">BinaryType</a>&gt;</h4></section></div></details>",0,"polars::chunked_array::builder::BinaryChunkedBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-BinViewChunkedBuilder%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/builder/string.rs.html#8\">source</a><a href=\"#impl-Clone-for-BinViewChunkedBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"polars/chunked_array/builder/struct.BinViewChunkedBuilder.html\" title=\"struct polars::chunked_array::builder::BinViewChunkedBuilder\">BinViewChunkedBuilder</a>&lt;T&gt;<div class=\"where\">where\n    T: ViewType + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/builder/string.rs.html#9\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"polars/chunked_array/builder/struct.BinViewChunkedBuilder.html\" title=\"struct polars::chunked_array::builder::BinViewChunkedBuilder\">BinViewChunkedBuilder</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","polars::chunked_array::builder::BinaryChunkedBuilder","polars::chunked_array::builder::StringChunkedBuilder"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()