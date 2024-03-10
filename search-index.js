var searchIndex = new Map(JSON.parse('[\
["common",{"doc":"","t":"FNNNNNNOOOONNNN","n":["PacketLog","borrow","borrow_mut","clone","clone_into","from","into","ipv4_destination","ipv4_source","port_destination","port_source","to_owned","try_from","try_into","type_id"],"q":[[0,"common"],[15,"core::result"],[16,"core::any"]],"d":["","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","",""],"i":[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"f":"`{ce{}{}}0{bb}{{ce}d{}{}}{cc{}}3````3{c{{f{e}}}{}{}}0{ch{}}","c":[],"p":[[5,"PacketLog",0],[1,"unit"],[6,"Result",15],[5,"TypeId",16]],"b":[]}],\
["feature_extraction_tool",{"doc":"","t":"CHHHCCPPPFGPPPGPPPPNNNNNNNNNNNNNONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNOOOCCFNNHNNNHNNNPPKGNNNNNNNMNNNCCFOOOOOOOOONNOOOOOOOOOOOOOOOOONOOOOOOOOOOOOONNOOOOOOOOOOOOOOOOOOOOOONOOOOOOONOOOOOOOOOOOOOOONNNOKM","n":["args","handle_dataset","handle_realtime","main","parsers","records","CicDdos2019","CicIds2017","CicIdsCollection","Cli","Commands","CseCicIds2018","Ctu13","Ctu13Ld","Dataset","Dataset","Realtime","UnswNb15","UnswNb15Ld","augment_args","augment_args_for_update","augment_subcommands","augment_subcommands_for_update","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","command","command","command_for_update","fmt","fmt","fmt","from","from","from","from_arg_matches","from_arg_matches","from_arg_matches_mut","from_arg_matches_mut","group_id","has_subcommand","into","into","into","to_owned","to_possible_value","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","update_from_arg_matches","update_from_arg_matches","update_from_arg_matches_mut","update_from_arg_matches_mut","value_variants","dataset","interface","path","csv_parser","parser","CsvParser","borrow","borrow_mut","filter_record","from","into","parse","preprocess_headers","try_from","try_into","type_id","Csv","Io","Parser","ReadError","borrow","borrow_mut","fmt","from","from","from","into","parse","try_from","try_into","type_id","cic_record","print","CicRecord","ack_flag_count","act_data_pkt_fwd","active_max","active_mean","active_min","active_std","average_packet_size","avg_bwd_segment_size","avg_fwd_segment_size","borrow","borrow_mut","bwd_avg_bulk_rate","bwd_avg_bytes_bulk","bwd_avg_packets_bulk","bwd_header_length","bwd_iat_max","bwd_iat_mean","bwd_iat_min","bwd_iat_std","bwd_iat_total","bwd_packets_s","bwd_pkt_len_max","bwd_pkt_len_mean","bwd_pkt_len_min","bwd_pkt_len_std","bwd_psh_flags","bwd_urg_flags","cwe_flag_count","deserialize","down_up_ratio","dst_ip","dst_port","ece_flag_count","fin_flag_count","flow_bytes_s","flow_duration","flow_iat_max","flow_iat_mean","flow_iat_min","flow_iat_std","flow_id","flow_packets_s","fmt","from","fwd_avg_bulk_rate","fwd_avg_bytes_bulk","fwd_avg_packets_bulk","fwd_header_length","fwd_iat_max","fwd_iat_mean","fwd_iat_min","fwd_iat_std","fwd_iat_total","fwd_packets_s","fwd_pkt_len_max","fwd_pkt_len_mean","fwd_pkt_len_min","fwd_pkt_len_std","fwd_psh_flags","fwd_urg_flags","idle_max","idle_mean","idle_min","idle_std","init_win_bytes_backward","init_win_bytes_forward","into","label","max_packet_length","min_packet_length","min_seg_size_forward","packet_length_mean","packet_length_std","packet_length_variance","print","protocol","psh_flag_count","rst_flag_count","src_ip","src_port","subflow_bwd_bytes","subflow_bwd_packets","subflow_fwd_bytes","subflow_fwd_packets","syn_flag_count","timestamp","tot_bwd_pkts","tot_fwd_pkts","totlen_bwd_pkts","totlen_fwd_pkts","try_from","try_into","type_id","urg_flag_count","Print","print"],"q":[[0,"feature_extraction_tool"],[6,"feature_extraction_tool::args"],[65,"feature_extraction_tool::args::Commands"],[68,"feature_extraction_tool::parsers"],[70,"feature_extraction_tool::parsers::csv_parser"],[81,"feature_extraction_tool::parsers::parser"],[96,"feature_extraction_tool::records"],[98,"feature_extraction_tool::records::cic_record"],[193,"feature_extraction_tool::records::print"],[195,"alloc::string"],[196,"anyhow"],[197,"core::result"],[198,"clap_builder::builder::command"],[199,"core::fmt"],[200,"core::fmt"],[201,"clap_builder"],[202,"clap_builder::util::id"],[203,"core::option"],[204,"clap_builder::builder::possible_value"],[205,"core::any"],[206,"csv::string_record"],[207,"std::collections::hash::set"],[208,"core::iter::traits::iterator"],[209,"alloc::boxed"],[210,"csv::error"],[211,"std::io::error"],[212,"serde::de"]],"d":["","","","","","","CIC-DDoS2019 from the Canadian Institute for Cybersecurity","CIC-IDS2017 from the Canadian Institute for Cybersecurity","CIC-IDS-Collection from Laurens D’Hooge","","","CSE-CIC-IDS2018 from the Canadian Institute for …","CTU-13 from CTU university of the Czech Republic","CTU-13 without contaminant features from Laurens D’Hooge","","Feature extraction from a dataset","Real-time feature extraction","UNSW-NB15 from UNSW Sydney","UNSW-NB15 without contaminant features from Laurens D’…","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","The network interface to capture packets from","The relative path to the dataset","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","","","","","","","","","","","","","","","","","","","","","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,11,11,1,1,8,8,11,11,8,11,1,8,11,1,1,1,8,8,8,8,11,1,8,11,1,8,11,8,11,8,11,8,11,1,1,1,8,11,1,8,11,1,8,11,1,8,11,8,11,1,34,35,34,0,0,0,23,23,0,23,23,23,0,23,23,23,26,26,0,0,26,26,26,26,26,26,26,30,26,26,26,0,0,0,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,0,33],"f":"`{{bd}f}{h{{l{fj}}}}{{}f}```````````````{nn}000{ce{}{}}00000{bb}{{ce}f{}{}}{{}n}`0{{A`Ab}Ad}{{AfAb}Ad}{{bAb}Ad}{cc{}}00{Ah{{l{A`Aj}}}}{Ah{{l{AfAj}}}}10{{}{{An{Al}}}}{dB`};;;;{b{{An{Bb}}}}{c{{l{e}}}{}{}}00000{cBd{}}00{{A`Ah}{{l{fAj}}}}{{AfAh}{{l{fAj}}}}10{{}{{Bf{b}}}}``````{ce{}{}}0{{Bh{Bl{Bj}}}Bh}<1{{Bnd}{{l{{Cb{C`}}Cd}}}}{Bh{{Cf{Bh{Bl{Bj}}}}}}887````33{{CdAb}Ad}{ChCd}{CjCd}{cc{}}7{{Cld}{{l{{Cb{C`}}Cd}}}}==<````````````88`````````````````{c{{l{Cn}}}D`}`````````````{{CnAb}Ad}3``````````````````````:```````{Cnf}```````````````{c{{l{e}}}{}{}}0{cBd{}}``{Dbf}","c":[],"p":[[6,"Dataset",6],[1,"str"],[1,"unit"],[5,"String",195],[5,"Error",196],[6,"Result",197],[5,"Command",198],[5,"Cli",6],[5,"Formatter",199],[8,"Result",199],[6,"Commands",6],[5,"ArgMatches",200],[8,"Error",201],[5,"Id",202],[6,"Option",203],[1,"bool"],[5,"PossibleValue",204],[5,"TypeId",205],[1,"slice"],[5,"StringRecord",206],[1,"usize"],[5,"HashSet",207],[5,"CsvParser",70],[10,"Iterator",208],[5,"Box",209],[6,"ReadError",81],[1,"tuple"],[5,"Error",210],[5,"Error",211],[10,"Parser",81],[5,"CicRecord",98],[10,"Deserializer",212],[10,"Print",193],[15,"Dataset",65],[15,"Realtime",65]],"b":[[88,"impl-From%3CError%3E-for-ReadError"],[89,"impl-From%3CError%3E-for-ReadError"]]}],\
["xtask",{"doc":"","t":"PPGFPNNNNNNNNCNNONNNNNNNNNNNNNNHCNNNNNNNNNNGPPFNNNNNNHNNNNNNNNNNNNNNNOONNNNNNNNNNFNNNNOHNNNNNNNNOHOONNNNN","n":["BuildEgressEbpf","BuildIngressEbpf","Command","Options","Run","augment_args","augment_args_for_update","augment_subcommands","augment_subcommands_for_update","borrow","borrow","borrow_mut","borrow_mut","build_ebpf","command","command","command","command_for_update","command_for_update","fmt","fmt","from","from","from_arg_matches","from_arg_matches","from_arg_matches_mut","from_arg_matches_mut","group_id","has_subcommand","into","into","main","run","try_from","try_from","try_into","try_into","type_id","type_id","update_from_arg_matches","update_from_arg_matches","update_from_arg_matches_mut","update_from_arg_matches_mut","Architecture","BpfEb","BpfEl","Options","augment_args","augment_args_for_update","borrow","borrow","borrow_mut","borrow_mut","build_ebpf","clone","clone_into","command","command_for_update","fmt","fmt","fmt","from","from","from_arg_matches","from_arg_matches_mut","from_str","group_id","into","into","release","target","to_owned","to_string","try_from","try_from","try_into","try_into","type_id","type_id","update_from_arg_matches","update_from_arg_matches_mut","Options","augment_args","augment_args_for_update","borrow","borrow_mut","bpf_target","build","command","command_for_update","fmt","from","from_arg_matches","from_arg_matches_mut","group_id","into","release","run","run_args","runner","try_from","try_into","type_id","update_from_arg_matches","update_from_arg_matches_mut"],"q":[[0,"xtask"],[43,"xtask::build_ebpf"],[81,"xtask::run"],[105,"clap_builder::builder::command"],[106,"core::fmt"],[107,"core::fmt"],[108,"clap_builder"],[109,"core::result"],[110,"clap_builder::util::id"],[111,"core::option"],[112,"core::any"],[113,"alloc::string"],[114,"anyhow"]],"d":["","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Build the release target","Set the endianness of the BPF target","","","","","","","","","","","","","","","","Set the endianness of the BPF target","Build the project","","","","Returns the argument unchanged.","","","","Calls <code>U::from(self)</code>.","Build and run the release target","Build and run the project","Arguments to pass to your application","The command used to wrap your application","","","","",""],"i":[5,5,0,0,5,2,2,5,5,2,5,2,5,0,2,5,2,2,5,2,5,2,5,2,5,2,5,2,5,2,5,0,0,2,5,2,5,2,5,2,5,2,5,0,18,18,0,15,15,18,15,18,15,0,18,18,15,15,18,18,15,18,15,15,15,18,15,18,15,15,15,18,18,18,15,18,15,18,15,15,15,0,19,19,19,19,19,0,19,19,19,19,19,19,19,19,19,0,19,19,19,19,19,19,19],"f":"`````{bb}000{ce{}{}}000`{{}b}0`00{{df}h}{{jf}h}{cc{}}0{l{{A`{dn}}}}{l{{A`{jn}}}}10{{}{{Ad{Ab}}}}{AfAh}88{{}Aj}`{c{{A`{e}}}{}{}}000{cAl{}}0{{dl}{{A`{Ajn}}}}{{jl}{{A`{Ajn}}}}10````>>===={{AnB`}{{A`{AjBb}}}}{BdBd}{{ce}Aj{}{}}??{{Bdf}h}0{{Anf}h}>>{l{{A`{Ann}}}}0{Af{{A`{Bdc}}}{}}={ce{}{}}0``0{cB`{}}<<<<;;{{Anl}{{A`{Ajn}}}}0`{bb}033`{Bf{{A`{AjBb}}}}{{}b}0{{Bff}h}{cc{}}{l{{A`{Bfn}}}}0{{}{{Ad{Ab}}}}9`5``{c{{A`{e}}}{}{}}0{cAl{}}{{Bfl}{{A`{Ajn}}}}0","c":[],"p":[[5,"Command",105],[5,"Options",0],[5,"Formatter",106],[8,"Result",106],[6,"Command",0],[5,"ArgMatches",107],[8,"Error",108],[6,"Result",109],[5,"Id",110],[6,"Option",111],[1,"str"],[1,"bool"],[1,"unit"],[5,"TypeId",112],[5,"Options",43],[5,"String",113],[5,"Error",114],[6,"Architecture",43],[5,"Options",81]],"b":[[58,"impl-Debug-for-Architecture"],[59,"impl-Display-for-Architecture"]]}]\
]'));
if (typeof exports !== 'undefined') exports.searchIndex = searchIndex;
else if (window.initSearch) window.initSearch(searchIndex);