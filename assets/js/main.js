var YT = {};
var user = "";
var key = "";
var goal = "";
var APIKeys = ["AIzaSyDDEbTiTSAK89PFXon3sOGIX3CsTsBL1oA", "AIzaSyD87er3n_gedLNfb_uVY6sF-5cbYE-uFHM", "AIzaSyDsjY7zKIxE9NG3xluvZepwYHD2vjBt9lo", "AIzaSyD2aLOfH18P889oz5OUi3Eckb3qGzJ9lvU", "AIzaSyCAICFzxvKWCfVhQUz1GSSblO3L4X74R0M", "AIzaSyBiMYerXm0u9f5doBdI-YljrSfsqIdyiwI", "AIzaSyA8wEOgIJ7LEY4iDG4Qg_Ad2VgTEWlUIrA", "AIzaSyBxeCTQ9eNe5gtkhrVPg_YNZxuOS9kkNN0", "AIzaSyDUTMnWBR_DfWz7Obdj_V-YMzPnNgqzKME", "AIzaSyCJzUJFzbjfByeeiDL0zjIrABvBZvqwTeY", "AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ", "AIzaSyAXrk1HSRZX2tEPDhKoPGm7gQ49--IKp2k", "AIzaSyDsxIyAMEYNxF5s4KqcP2hA0trTYzi5ZaU", "AIzaSyDpzp1OEW-axtoc5O5kyxl0S2-46WfGVJg", "AIzaSyAXmcBmHfFZfzFPUHnDf55gX-7EESGSUn0", "AIzaSyAt14oAUc2M5P7ddtF6F2o6hNOZb1F9Gh8", "AIzaSyApJEbF-pgr5sRc9hR0NznPx6UA_CCJPG4", "AIzaSyDHEyizXx6ExuMfrpgqSP_5aTIoqmDhk4g", "AIzaSyB5IsxA_-IjXbnBoZ7zx6fSAAPgpCydIxk", "AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA", "AIzaSyAZ1uTYfKguS-o-xru-icR8PM44F4DQhdE", "AIzaSyCikVFcqA8qluxKrwMwUGjtliSuByFR8-U", "AIzaSyALa1cPhbMdOKjwgJEvqkhGfTukLdIKupE", "AIzaSyCLtRzn0-P2_mPfBKlk7SqzTSI-S49CTSs", "AIzaSyANRopUwcIy9_Gj_gebyYdSkMlRgLjzlWA", "AIzaSyCwc7GrN9gc3RTEOnXi5RtFCREQm04TrcY", "AIzaSyB2-i5P7MPuioxONBQOZwgC7vWEeJ4PnIo", "AIzaSyB6JZxYxR9OpxIQ0wbvZD_DnJcTVt4MihU", "AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", "AIzaSyBIUneOnieL9jxdA1MiKuvaMrcibJc8Og0", "AIzaSyBkQDWiRWxWKUoavuajUSAs28ld0Pdx8a4", "AIzaSyDT6AVKwNjyWRWtVAdn86Q9I7HXJHG11iI", "AIzaSyBzj4Hgfmhlrm_bVeSNnpb5U9zUnLBJup8", "AIzaSyATnA8iySFAP1TKtLcdcqHgGyM7G9Zpj7c", "AIzaSyDtmgm9nJRQhWg4j1SetCH-vDMZ3_UZfK0", "AIzaSyBVy4EKrR51E1zb1eybglkT0VRotEbQbEo", "AIzaSyBnIAqzNEjw_ZJjqsRenVctNQMrIwHtAJw", "AIzaSyBmEgHy0Fs50bRDv2N-4LJYSy0-MkT-K50", "AIzaSyBOgJtkG7pN1jX4bmppMUXgeYf2vvIzNbE", "AIzaSyAZw0kviWeCOidthcZAYs5oCZ0k8DsOuUk", "AIzaSyCfa44pDcLR4w3Wrk2jyiqPRqc8Xr8oxFg", "AIzaSyBlRMCifkXmDv30ugkOCWMX3OkgtpNseR4", "AIzaSyA9YIeJMUAUAO5QaCo0wzfbdGlLIbjo1D4", "AIzaSyCRXTR0G_Slvgyjj_Vgfry6KLiw8pIMlHs", "AIzaSyBQgTWNFmBcR-omkycjHQRGiTtL2DUEm60", "AIzaSyB4Q3icIKTwtGEuxKu09cVaBK30FxT57cs", "AIzaSyADN-pQYegmLCi9s5CEkB-pyqZBaFNwunE", "AIzaSyD22x7IqYZpf3cn27wL98MQg2FWnno_JHA", "AIzaSyBcVwc05rajri1UMe5y_uWksWzuOKgj1U0", "AIzaSyC9A_hUq6r2IMgoMVU15CL4OFRoeTzY9vU", "AIzaSyBcwu1SywcDUTfyRTFVVBtOUmllvVu5lzY", "AIzaSyA6vp-xcPCf1-1TtmHc49Sq9kwPv4RTaBA", "AIzaSyB91k7jLqrzqHOKVxcsbPvTor6aTW1OX2w", "AIzaSyCsP86MhVPfDaOeHgi9LQA1t1cT3csEpJU", "AIzaSyCcjD3FvHlqkmNouICxMnpmkByCI79H-E8", "AIzaSyCKrVC4PbYLa0S0CmIFj97PdjhwvEcALV4", "AIzaSyDfhY-tmn7Q4NH-31jMaaWqOCegDG_uRBQ", "AIzaSyC1BT7o1xH2bM-WYaniC3VUfgvELj48850", "AIzaSyCYkW3D7NHYpx9TLBzHdh37YXYlUUBt860", "AIzaSyCHooIQqQfZ3advyfy-F0KqM9Z5XUN2dTQ", "AIzaSyDvQuHTDU6PE0q25RSHSAHFkY7YNncSTxs", "AIzaSyCB4Hj3pIiIb6IaqoJvp0BoKDIygkQnT2c", "AIzaSyBt8lp3CU87gU8AQKz4BWG5mLE5kFOSfmk", "AIzaSyAu5kEu3rb1cCgM6Iqlbamt6D_DNrIex_8", "AIzaSyCSYn85k54O6ZRHhjjVuU3itvxCKuZTha4", "AIzaSyDZ04ZOZBWfENOzs9cTS9XolD-0tEhxzZo", "AIzaSyBSxGK2RzdlKLVQTkIOuteQHLRxZ-MuJRI", "AIzaSyChh0yi4FwvMQtj-Qtx2_5q_0xaGjoR-1M", "AIzaSyAzhkrAEax-6glljYL4U1GaEOwjSyydEpk", "AIzaSyCci79-Uk7M-hBXX8TFS8_y8e-8zpAiKlY", "AIzaSyCLpk_z1gbA423gb9CtUVAW3NmXO65Si2Q", "AIzaSyD_yxaqfo6k7yXLl5tqelE0ZQYay7KoCyo", "AIzaSyBbTkdQ5Pl_tszqJqdafAqF0mVWWngv9HU", "AIzaSyA7JyF9XS5cdW4bYKC2df1EjY2kmWQ_T6k", "AIzaSyCAW5u0j2pz6RoavNbTYTsbn-VqWFLR0uk", "AIzaSyBL6aPKYByygs9oHB5rStYhTBKtklqRkrI", "AIzaSyAckH3jasRbe8gTqwAQSVrmidcdrTgsmPk", "AIzaSyDOqZtT01vX5FyWTPzalHIfq-wbOXIju2w", "AIzaSyA_SqAZGCpZ22vHzOUr3St5xf5XMy78oTY", "AIzaSyCZfHRnq7tigC-COeQRmoa9Cxr0vbrK6xw", "AIzaSyBH2ltO-MFMiW7dftsCCM3w8F86M-kwDHM", "AIzaSyD_GFTv0BYK2UqbuEmFuAb1PkJ1wHSjpaA", "AIzaSyDHgqe2iHORox_6rxmlT19JjDlBuWYlygU", "AIzaSyBXAu5ym186De_Z68aG2K7Hz76ZeN88nqw", "AIzaSyAqum1VKtL_6tCpivQvmYIelSsc0mcnp20", "AIzaSyCIRFIVkrWdxEmbrjf6J1W2B_OahFHOZ8s", "AIzaSyAZ-O1FHzD0qOn0zeLmVGTJhBybVp4yXUA", "AIzaSyB0Rdzmn2haPKG3YMEqFpPiYI1NrdLllx0", "AIzaSyC3YTdLwbWAehAQG_OvTMGVAIwE06F5c2w", "AIzaSyBwdBJaD7GBrWJ7qMRcid8lGsrXLsBw0RQ", "AIzaSyC4zJwg96JC6YEYr9OQkmveR4ELgnqsZ5A", "AIzaSyAzYHm1iwMocB9pW2uZrz_6Sqte5t_bXGo", "AIzaSyDDXIPTpDjtE6f7Hhn_KylMVBHBZ00M2pk", "AIzaSyBneuqXGHEXQiJlWUOv23_FA4CzpsHaS6I", "AIzaSyBNMdTRxwA1waBGk_qFxUSRadSAw_dg3Bc", "AIzaSyDuMSI5Hv5hRdpsDUEmN8q1U2RlOy23RB4", "AIzaSyDCiUTAEKc5flQmF_VbcN6rZfCBJcUPlNM", "AIzaSyA3INgfTLddMbrJm8f68xpvfPZDAzDqk10", "AIzaSyCVcswzU30smEz9Mda8AohjOYv0KQC4Wlo", "AIzaSyBJsZJqSOL5xkTam9lzE5Au-1gmlaL2t1g", "AIzaSyBgx4xHiuPlnjxOz3zckix6wwcym2sfb18", "AIzaSyDrVuKpzAesWaxmtPvrh_gvhm-035y2aWc", "AIzaSyBD5UAIh55mTmz9WvafIi91HPuox8IWMA8", "AIzaSyAe112w0RobjC1XtoO3Os3YI6cvMZm9oKk", "AIzaSyAbI6T7s1vZtb_DY4pRWnuq-kZIqJNUa6E", "AIzaSyBQjpE3RBtPm9PyquAMbhNCMkaYzhHpjbI", "AIzaSyAcs1k_I1W1OcErEOJypzx97vW2Pc7N2rE", "AIzaSyCHwZBtG3Y89NQffIXKCdlRnduFVgWR4JI", "AIzaSyBmtm-NaguLZ3ylUbnEPtR_o4QIXIQVpuQ", "AIzaSyD1lRHrPMSkGXjLelY7Rj29hhOpH7eBeUs", "AIzaSyCZzbZYrl0q_DifacgL__oJMcSRLfR8qsY", "AIzaSyCBkbf66aT6R2tEULE-EFjIM_8i1ZSckWA", "AIzaSyBWoA1ZTbfptkRREoNpA9ryhlnQPrWbiqQ", "AIzaSyDBpLfYd502eOy7nYj-mVLSbD_XkB0lbFI", "AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk", "AIzaSyC2E6Eq8fOPcRS6_nnJK_n5O2dOSyJqQLU", "AIzaSyBrd7H-rEyn_bxcFnFUPbP8qAa7a-00qXo", "AIzaSyBQvKgojQbsIkZzYAZF1OT0UUAdAVMN4NQ", "AIzaSyD7tj6EM3Y3r8sl1tV2ReMdTqyOg368bfw", "AIzaSyC7Czwy79W_Xd-ANIIZScJ6aW8dMG13wFQ", "AIzaSyBpzdGfqiHJj7VJBlZWKnPaLur8u4FMf3E", "AIzaSyAaC_8-H6aak7eplurGNlJgZXj-6rJt7Y8", "AIzaSyC9X_RJzeeCplmrB6mB6qgZuLy_MLoyjEA", "AIzaSyAxQmM8s8XLktIqQ7rnP9PwnwlzbPlKMd4", "AIzaSyCU42JPkcy7vrZxa-HB_4axxn8u9qdrFn4", "AIzaSyCSDI9_w8ROa1UoE2CNIUdDQnUhNbp9XR4", "AIzaSyCzkspLu20yZKssmrEeH5Cz9cZU8tXYMPY", "AIzaSyAmXIxtv1F8rXZugNXuCw89xiOVaBB0AI8", "AIzaSyC3AolfvPAPlJs-2FgyPJdEEKS6nbPHdSM", "AIzaSyBVvA3L48qOSdoULFSVNJy50KOXnBBf3Qc", "AIzaSyBzEeJ0VPrk9CkFQEfAy6rkNlcW1Z8ALog", "AIzaSyALz9JCfE7GzZN5-uDjFNrT61tyCeX2l20", "AIzaSyCfuWj3r1tZGBB2m5qUBKprIMQhqgsrBkA", "AIzaSyBFOjxT0aNAQ2SVSndggjcU9NAZ0eH6KnM", "AIzaSyB0n5mXLcfF8W9ycueQr5mSWiyMfCTQqaE", "AIzaSyCR48jSAQQDU2oJh9jRtLYU4rOcH0tcQOc", "AIzaSyALS3gXxj-S36j8WcLIxq1cnqEY7H5dFYo", "AIzaSyAPpYdxSjEfRHgX0nWJMvrdr8aEbfGnaO8", "AIzaSyBSS0gFNOwRnc7onQ2jN0q4CXq7duD_tZs", "AIzaSyAhV50luQmfnhbcgUdl5iApAY6bqT8EEVE", "AIzaSyDgBp5KPiA5xyQqnGWs-mM7p5YLRm_hmKM", "AIzaSyCNQ1slAxWLz8pg6MCPXJDVdeozgQBYxz8", "AIzaSyA25ISk8gdpn4md-gCNR2p_GH7z3KzgqKA", "AIzaSyDDrTTbRwleZbhbjBhk4J7EWSPChvDm6V0", "AIzaSyBJQwVRua2_AFjOpzEOeXBvNZRichsG8v8", "AIzaSyDWFJZLgApEib4bZMrXohp-8gLd4Ks4rMY", "AIzaSyB160VdaM-ZZxuHItseLBJNht02Ey5T45E", "AIzaSyDqJSCbAeQQyQ8dI76N3gTmwLOwmNqXAc0", "AIzaSyA2V7ap54YkNGNz0H23bFBQ2rH-o7_gnRI", "AIzaSyC1q08sEH1Wo-FQeu08jR27Vy9onJTUjS8", "AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I", "AIzaSyDgDK6ooEOIKtyU-IDGvoTx8omrmJyzedE", "AIzaSyCW_C8XB5Y8kd9SQIJh-7234TaQ0EFpyfQ", "AIzaSyCX2ZG87-xjfdtB0FSv9sGEm8iBHI0NfQE", "AIzaSyCcWdqrsYvafX5VCqnp8RqOGQsJOQiZmyE", "AIzaSyBqKlPmm6TWBP_4qqbn8QTAqNQ6s1WnB_Q", "AIzaSyA0Fo_iAS7ASnPFKDAHD0viCOZMjt9juxY", "AIzaSyAd3E4XlUx1xS9fEtmuRWxX5ruJBQmCUIw", "AIzaSyAeD8B0uw6LfP9C0IxGA8g2lGflJODASDE", "AIzaSyCRe97CoXGQm4BdwtpvCz1WuApAGdqGGF8", "AIzaSyC_Uj__ANC72TG-UAknCN2jPakwxwql_kU", "AIzaSyCaRTO7NwF7p5NEWzHG-TeqRjlw1u1Fwf8", "AIzaSyAJLT5922IqO7nNCo8R2-jyqsiWHHfaJ-c", "AIzaSyDYBZVMBplCWPsRIC0jaOELQeYV9u62WLQ", "AIzaSyALnKMoyO5LmjPEkxetM-I4yqPNPkVLoB0", "AIzaSyApDGLQjePMxCZLlS4DgjCrsSYXuWGJxQA", "AIzaSyAFqn8OHeuOxpiE2XgtgM89ROXzCXL0qX8", "AIzaSyAdvN8GLm7kbmczuD2hdicWomBy6-s9X6E", "AIzaSyDReqVRLtAgSHqi53fvm2T0g67aIKttjuI", "AIzaSyB8GMc25p2aIAe-c7RprBg-4tWYH1z8Sks", "AIzaSyDgg7OxSuuDNwlQKBZgp2CkDo7fa_MG2aQ", "AIzaSyB8KYhJC3MJC9SOCywmusfictlBlyVfxwo", "AIzaSyColoThw7Xkgn0KxycX_pwUSbQfGY7XKDk", "AIzaSyCcgad1f2vB0DD4y0pmSgU9MFLRzUV2smk", "AIzaSyDXbxJEIW1CeXY7xrQAVQSYDA3mSBzC9iM", "AIzaSyAMkaQUJB-t1XzQwBpaX_4UYQ_ZDLPon9c", "AIzaSyAqqFr1ljHrcKqhzoBSGSOaSfEEZhDRaCI", "AIzaSyCSJuL_pFmVqReyMV2mPAiStIv6u4MA7jY", "AIzaSyBgDrdkGCyNY7NsOsHNijRF0crD2YGwvDg", "AIzaSyA8YyvqBZrFbzlUKLhEHCnZehlQHnrovuQ", "AIzaSyARmQle7kd_Jdl4OEFmJOCGnUHbMg9vjGo", "AIzaSyCdPQr0OBjSUdLqWoP29Z7oGp2NnBh5gNI", "AIzaSyAudGmI32QygtkxS80REON501yRkMpPFxc", "AIzaSyDjmbTXNKd7O9Ssz05NJNKdihGQvrXhy4Q", "AIzaSyArF3ec1ypsO7ofUGw2WjbubgHNC7SNKCo", "AIzaSyBun6DJ2sIoJaT6kuagzespTdR_i6sZuFo", "AIzaSyC-SaY0gXcQ-NphV4xeEmyBvEddAcPry1w", "AIzaSyBOV_S-m4eZnc0mHzspfnm-gwmC1GBiiBs", "AIzaSyAwOz7G30GjHcbfOFQcdRENFhhbItDRw5I", "AIzaSyDQBoHcFW8pIeykL6vFLm-t3h43RkS6utU", "AIzaSyB5eKXwkalXz6vBLo9hjFWTvzOa8zdN960", "AIzaSyADXs2cTMzkztwAIYGEH4iyMvtpebv0r8I", "AIzaSyC8cBG9qURY7sGE-gpDEDFMEgryTToVRpc", "AIzaSyBdM91x_afcndR_ToFr4TDC8Fh_QGmgbkA", "AIzaSyCngvJXYExEijUBljNgKrymgyDHjV5J_iU", "AIzaSyAoDxn9B1gMWcn_mx9yxug7MFOihd0nbXg", "AIzaSyB_w78ZnTKbhX4-dc8Qb5C1Un1748-WHMc", "AIzaSyAtHGrv1TRgjnKgONYNEHj3lDvRockUhNk", "AIzaSyCx1yNfQ6JagF36u5CoyIMvXuGXF86IrhI", "AIzaSyCkytVbeQ5cnTv_kR2Er_7hn1SY1uaavyE", "AIzaSyA8Zw-yrtg1Z1d7d-Ue7P4_ZAJtJgujp40", "AIzaSyC2kMB1OuSY4O0ljK1sNbT9CtBG3xrFNRw", "AIzaSyBVvrKtgYwY0_aR6eI-RW9VSNx36DRyMj8", "AIzaSyDxH3q5LbUUFIXRwrYl--2cLNG-gcngnzw", "AIzaSyAriSzreOo8iwur_xbuAnKOALHQ6CYNkdo", "AIzaSyAJ8UVYKjhX9AmrTwBAfJIXnbnVlPaDxRQ", "AIzaSyDvCl3FAOr9z7Na_oyG8PhdmkF6srQ-HtM", "AIzaSyBgQPSALZZNNA1tACSFDakTZYSEdaBANc4", "AIzaSyCNtFjts20PEQ8GpitQPVJ5OZFbUGgVhMc", "AIzaSyBwYmCwND__44yOdUBEkNdhCsU6FfeYjeE", "AIzaSyB_iH4g5IpsQJgqd-0eaHZPNLE415-pB_4", "AIzaSyARHvRaAwLsMFh_rHmqH53pFGX6KvSxkcw", "AIzaSyAL5yH4hHOj9uVsd8C-ZdAaZmtCo6sAKig", "AIzaSyCmRPZ4hLkijSTtJYnjIitvAd45z291Bzs", "AIzaSyCWdcQqpct-CjthDuu-xjqo0nO_1IlpJmk", "AIzaSyA3pYzqSZmRTTWXD6n7GY15LqssSHqj5d0", "AIzaSyDH-AmwSOGduYt-tDfAzVLMOoC1RXrR9qE", "AIzaSyCYJJdaKHV0pnU6z9iUIEm_tn16WkAzU50", "AIzaSyCV7Y3LSoDVrU87vmiBGMV41YmvNYf858M", "AIzaSyACOFTL-RmYgAS8HNi0ol3vp-gbFo0nzcs", "AIzaSyC9kDYz9Ia7jf9hEf_ig1JJakEjadYEC_I", "AIzaSyCJc3jP4mUaHK3H3iKP1tAg5Sre_ZXyRZ8", "AIzaSyAUhI42YXESUYAUYgrCT0MPcvQ5wKcKXb8", "AIzaSyASbvrdZO4sOkjs9zfvFX-L5bdDyDEbi08", "AIzaSyBAuvg8uDXvkwcgY6odYGogzeif1-v0qb0", "AIzaSyDGPy7EpMnWBakmS--6Zo6he17npKi1Scc", "AIzaSyDxUqsaLBTrjdn3Nww9AW6QTv-7ozzD2Pk", "AIzaSyDkZO9VxXUSZULaKP1trHRET7H0ZvrKaMU", "AIzaSyBoFvz1GUIDwMJSlt6144a5jLeMPDY3x7E", "AIzaSyDWaA2OoArAjQTHqmN6r9XrpHYNkpKGyGw", "AIzaSyBwsqnIGevoIu6GAmytF22wMFl2JO2XZo0", "AIzaSyBk3UwS9_0Mw1LFPUXIO_TjZr8dK9CqPNU", "AIzaSyC-eb1wfd4BSRYXumrJHVKSZiZhGwMDOCU", "AIzaSyC-2J15Q5Utd2CgpZsHF1Mbv0jnQlRPRaQ", "AIzaSyAhWdrSB6hiySJgxJywoE5WqXFfg1--hSk", "AIzaSyBPUsOE-_pAInBPUG_A5NMJ9V78_S1cA5c", "AIzaSyALUMHI1gzc_W5m89245j7hsT-thbe1qjY", "AIzaSyCn7TJ10po3jlW9s3c9HEvICiLF-OC4syw", "AIzaSyAYclzmbzChKrUo9RXiWUd3e08WWl04_T0", "AIzaSyBqpsmewbPiTDYXnTCDoudNBqNsuIw-mKk", "AIzaSyA-IT1Xknxt1QrCmtlvAxVN8YRZoYRgKXs", "AIzaSyBaJakjjAHw0wvBtELAtDLPmhq1piGWwqQ", "AIzaSyDXtUj8urMLq0xLC4obpF9I1L1NNkx2H-I", "AIzaSyClWK6raBj4KMLWAwnX8KDT-EXU0HgdoRQ", "AIzaSyCfQQeFREcG8yFzLj5I9-J_DxGgfh4N4vc", "AIzaSyDUEQDtVZP8x-I_acDvRsNZCa0H3ix7rdA", "AIzaSyCeE1fV4u_mhnYlTf-EzokbQtdhXJBlpLQ", "AIzaSyC3NhWVzNbrkKDq5tggtOKWctHQK3jfIeU", "AIzaSyDRSYXX5uXaQQ7OduW6y3i3P9lNhTtKfoU", "AIzaSyBEgxtwHJGbLdoe_CjEO37kd_eHncFugSQ", "AIzaSyDzUqDdCGrb5g5YU0fo0pB9QbqurkK3GSc", "AIzaSyApmhFr5oa8bmKPcpN7bm-h0mekjkUVypU", "AIzaSyBDBi-4roGzWJN4du9TuDMLd_jVTcVkKz4", "AIzaSyAZDgDzsLyU1E1D2Ic76Eol2NbuBp8SKyg", "AIzaSyAuecFZ9xJXbGDkQYWBmYrtzOGJD-iDIgI", "AIzaSyAm3hJqTq1L1wcz-cz_4zLUNs2PD37hLuY", "AIzaSyDmUVXdKMQfp1428NsX0GuBHEp3Hh6VnRQ", "AIzaSyBfwGkn-dQxMy_T612ClTxE0akg4FYRVHI", "AIzaSyBxev1RWFZcTrjtpGb8KcbhdljsmaTC6AY", "AIzaSyAT3li1KjfLidaL6Vt8T92MRU7n4VOrjYk", "AIzaSyCo-PwQAtlrchgSAY0hLnE2HYSRhqdsPXk", "AIzaSyC7asPTom1oZVPmZu7UcttGNFvqzRWQiRM", "AIzaSyBykc_bErt-mcLNSZ4ejKViOu4Prlllvbw", "AIzaSyBDRlKTk3MQwjCzuY8O3o4VgexjwtXhY9Q", "AIzaSyDT0_OI9Ss2Spi1IjpxhCy6JIwcnJ8cLuI", "AIzaSyC03yZIC1TYRqDYYjLAxFgg2TcTsBzwSeA", "AIzaSyDUUfmvtaHY3lQ11CbkF8gplSJSXwgLe2g", "AIzaSyBcWoSLALvBbxha0SKSzKtU7aeydVy9ua8", "AIzaSyBQGdt4DU0NcwoBJvB5N6plDAXw85t2QfM", "AIzaSyA0xWbm5Q7SF5aFZQJ8EGmb6fNc8cjQEwg", "AIzaSyAFdgjUKpIcWTHRwXq0T8eI1X48qwoXOcs", "AIzaSyDY8suw3_q3zMX6ZDhdr7IDpPLQ6CbEsoY", "AIzaSyCgp_Uc2jj1mAd7HW9AzAATt33rGkvttVQ", "AIzaSyCRtJ2uhgYe7p3J-QkC6kHsm7KZz0bDIok", "AIzaSyCaoJTO7kL-t0dWhxkTwwO7kg2k7IwImCU", "AIzaSyCnT246VRUMqERUaeipy34xQB_5SLVlS44", "AIzaSyAvdBHlCMEHeirfOfkYlyflVxPxhXEJlU8", "AIzaSyDp042sWeJnrYxaSPe1NTQdsjGH5HZJYy8", "AIzaSyA7kmklNrAsCNZJLCIjsFhwc8mRCgB6dmg", "AIzaSyB0uq8HHarCnpYG4pZxYPwE8wLAtM_gBN0", "AIzaSyDg7arbjgsAKEij1dEAJONeKoNFX005rbs", "AIzaSyAzDG3Codsm7Idl3GG58-UfMVgTaXf3UO0", "AIzaSyBbk_ozhKHH28nWJ1hU4vxNbwLqtsd9gIw", "AIzaSyBW5XaQF7T2AK62lehbP67VRrPLVh9Su7Y", "AIzaSyDC3Jc6WGTo6r0vf7VlkzVnm25GZPpy5UI", "AIzaSyCsxk-3l3HMjN4zZFQoOHpMj65lyEA8NW0", "AIzaSyCG7xsho1pmQavWYYglY9E2VILAnOGsZls", "AIzaSyCIM4EzNqi1in22f4Z3Ru3iYvLaY8tc3bo", "AIzaSyCYkM_LbtXdbyGh6pxT4S3we3c6Lte2A9A", "AIzaSyDWqz2skFHiBBAqv6b7DNDaDjYpS42x6vg", "AIzaSyAW8YpOSzVYliFrN5GoXtyr7BtU-N7998s", "AIzaSyDW85uAfkXFbnibnbvNmXBNEKlHwUuVBJg", "AIzaSyAqLZxZPmuOd1iuAMf_GsiV1zzQvcW5zqY", "AIzaSyDv9Y68QYWFcJFAYGOx6He7CHLGUiBYZT0", "AIzaSyCN8A47a_r_cz0gW8cy1JXBQAs_nnOOSw0", "AIzaSyAviHxf_y0SzNoAq3iKqvWVE4KQ0yylsnk", "AIzaSyAUTTqf3U41RnP890AbWmJ1MjYMznarjCo", "AIzaSyB3hw6YJqtiQRs1X5pNsmqWisgoifViVKE", "AIzaSyDQa76EpdNPzfeTAoZUut2AnvBA0jkx3FI", "AIzaSyADrrUFFLxuICKBewoVisQO4Ws9Op8xTv0"]

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-119417406-7');
var rightKeys = [];
var rightKey;
var ok;
var estimatedArray = [];
var previousCount;
var isUsingEstimatedCounters;

var chart = new Highcharts.chart({
	chart: {
		renderTo: 'chart',
		type: 'line'
	},
	title: {
		text: 'Subscriber Count Graph',
		color: '#66666'
	},
	xAxis: {
		type: 'datetime',
		tickPixelInterval: 150
	},
	yAxis: {
		title: {
			text: ''
		}
	},

	credits: {
		enabled: false
	},

	series: [{
		name: 'Subscriber Count',
		marker: {
			enabled: false
		}
	}]
});

setInterval(() => {
	$.each($('iframe'), (arr,x) => {
		let src = $(x).attr('src');
		if (src && src.match(/(ads-iframe)|(disqusads)/gi)) {
			$(x).remove();
		}
	});
}, 300);

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value
    });
    return vars
}

if(!getUrlVars()["c"]){
	user="UCaEk4apVOqy-sFVh3xnpJyw";
} else {
	user=getUrlVars()["c"];
}

if (getUrlVars()["o"] == "1") {
	document.getElementById('style').href='../../assets/global/odometer-fast.css';
	$(".checkbox-odo-slow").prop("checked", false);
	$(".checkbox-odo-fast").prop("checked", true);
} else {
	$(".checkbox-odo-slow").prop("checked", true);
	$(".checkbox-odo-fast").prop("checked", false);
}

$(".checkbox-odo-slow").click(function(){
	window.location = window.location.href.replace("o=1", "o=0")
})

$(".checkbox-odo-fast").click(function(){
	window.location = window.location.href.replace("o=0", "o=1")
})

setInterval(function() {
	if ($(window).width() < 1253) {
		document.querySelector(".card-container").classList.remove('offset-md-1');
		document.querySelector(".goal-container").classList.remove('offset-md-2');
		document.querySelector(".estimatedText").classList.remove('offset-md-3');
		document.querySelector(".search-container").classList.remove('offset-md-4');
		document.querySelector(".search-container").classList.add('offset-md-3');
		document.querySelector(".estimated-container").classList.remove('offset-md-2');
		$('.md1-row').removeClass('offset-md-1');
	} else {
		document.querySelector(".card-container").classList.add('offset-md-1');
		document.querySelector(".goal-container").classList.add('offset-md-2');
		document.querySelector(".estimatedText").classList.add('offset-md-3');
		document.querySelector(".search-container").classList.add('offset-md-4');
		document.querySelector(".search-container").classList.remove('offset-md-3');
		document.querySelector(".estimated-container").classList.add('offset-md-2');
		$('.md1-row').addClass('offset-md-1');
	}
}, 250)


let i = 0;                     
function myLoop () {          
   setTimeout(function () {       
      i++;                     
      if (i < APIKeys.length) {            
			var checkKey = APIKeys[Math.floor(Math.random()*APIKeys.length)];
			$.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=hHW1oY26kxQ&key='+checkKey, function() {
			if (rightKeys.includes(checkKey)) {
				console.log("Tried to add key that already exists in array! Returning...")
				return;
			} else {
				rightKeys.push(checkKey)
				console.log("Valid key! Added to array, trying more...")
			}
			}).fail(function() {
				if (rightKeys.includes(checkKey)) {
					rightKeys.pop(checkKey)
					console.log("Invalid key detected in array, removing it...")
				}
				console.log("Invalid key, retrying...")
		})         
      }                        
   }, 50)
}
myLoop();  


var intervalRefresh = setInterval(function() {

  var rightKey = rightKeys[Math.floor(Math.random()*rightKeys.length)];

  	if (isUsingEstimatedCounters) {
		$.getJSON('https://api.livecounts.io/yt_subs', function(data2) {
			var result = data2.filter(x => x.cid === user);
			if (result.length != 0) {
				YT.UpdateManager.updateSubs(YT.UpdateManager.updateSubs(result[0].subscriberCount))
				YT.GoalManager.load(YT.GoalManager.load(result[0].subscriberCount))

				document.querySelector(".estimatedText").innerText = "Please keep in mind this count is estimated! That means it might not be 100% accurate!!"

				chart.series[0].addPoint([                   
					(new Date()).getTime(),
					parseInt(result[0].subscriberCount)
				])

				if (!isNaN(result[0].subscriberCount)) {
					if (previousCount) {
						estimatedArray.push(result[0].subscriberCount - previousCount)
						if (estimatedArray.length > 61) {
							estimatedArray.shift()
						}
					}
				}
				previousCount = result[0].subscriberCount
				var estimated2Seconds = parseFloat(estimatedArray.reduce((a, b) => a + b, 0) * 2 / estimatedArray.length).toFixed(2)
				var estimated1Minute = parseFloat(estimatedArray.reduce((a, b) => a + b, 0) * 30 / estimatedArray.length).toFixed(2)
				var estimated1Hour = parseFloat(estimatedArray.reduce((a, b) => a + b, 0) * 1800 / estimatedArray.length).toFixed(2)

				YT.UpdateManager.updateEstimatedCounts(estimated2Seconds, estimated1Minute, estimated1Hour)
				
				$.getJSON('https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id='+user+'&key='+rightKey, function(data) {
					YT.UpdateManager.updateTotalViews(parseInt(data.items[0].statistics.viewCount))
				})
			}
		})
	} else {
			$.getJSON('https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id='+user+'&key='+rightKey, function(data) {
						YT.UpdateManager.updateSubs(data.items[0].statistics.subscriberCount)
						YT.GoalManager.load(data.items[0].statistics.subscriberCount)
			
						chart.series[0].addPoint([                   
							(new Date()).getTime(),
							parseInt(data.items[0].statistics.subscriberCount)
						])
	
				//YT.UpdateManager.updateTotalViews(parseInt(data.items[0].statistics.viewCount))
			}).fail(function() {
				rightKeys.pop(checkKey)
				console.log("Invalid key detected in right keys array, removing it...")
			});
			

	}


}, 2000)

window.onload = () => {
	YT.UrlManager.addUser();
	YT.UrlManager.addTheme();
	YT.UrlManager.addOdometer();
	YT.ThemeManager.load();
	YT.GoalManager.load();

	$.getJSON('https://api.livecounts.io/yt_subs', function(data) {
		var result = data.filter(x => x.cid === user);
		if (result.length != 0) {
			isUsingEstimatedCounters = true
		}
	})

	$.getJSON('https://www.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings&id='+user+'&key=AIzaSyAzRmWRQKbQpnAIH-Ws0ruzgxafjECdBCg', function(data) {
			YT.UpdateManager.updateName(data.items[0].snippet.title)
			YT.UpdateManager.updateAvatar(data.items[0].snippet.thumbnails.high.url)
			document.querySelector('.username').innerText = data.items[0].snippet.title;
			if (data.items[0].brandingSettings.image.bannerImageUrl.toString() != "http://s.ytimg.com/yts/img/channels/c4/default_banner-vfl7DRgTn.png") {
				YT.UpdateManager.updateBanner(data.items[0].brandingSettings.image.bannerImageUrl)
				$.post('https://api.livecounts.io/subGainPost', {username: data.items[0].snippet.title, cid: user})
			} else {
				if (user == "UCZJ7m7EnCNodqnu5SAtg8eQ" || user == "UCYiGq8XF7YQD00x7wAd62Zg") {
					YT.UpdateManager.updateBanner("https://livecounts.io/yt-sub-counter/assets/img/german-banner.png")
				} else {
					YT.UpdateManager.updateBanner("https://livecounts.io/yt-sub-counter/compare/assets/img/banner.jpg")
				}
			}
	}).fail(function() {
		$.get(
			"https://cors.upbount.com/https://www.youtube.com/channel/"+user,
			function(data) {
				YT.UpdateManager.updateAvatar($(data).find('img')[3].src)
				YT.UpdateManager.updateName($(data).find('title')[0].text)
				YT.UpdateManager.updateBanner($(data).find('img')[2].src)
				document.querySelector('.username').innerText = $(data).find('title')[0].text;
			}
		);
	})
	
	document.querySelector('.share-link').value= window.location.href;
	document.querySelector('.embed-link').value = '<iframe height="180px" width="500px" frameborder="0" src="https://livecounts.io/yt-sub-counter/embed/?c='+user+'" allowfullscreen></iframe>';
	document.querySelector('.embed-obs-link').value = 'https://livecounts.io/yt-sub-counter/embed/?c='+user;
	$(".links").load("/assets/global/other.html");

	if (getUrlVars["t"] == "0") {
		$("#square-white").css("outline-style", "solid")
		$("#square-white").css("outline-color", "black")
	}

	$.getJSON("https://api.livecounts.io/channelPromotions", function(data) {
		data.forEach(function(r){
			console.log(r)
			var HTML = '<li class="link"><i class="fas fa-user"></i><a href="/yt-sub-counter/?c='+r.channelId+'"> '+r.channelName+'</li></a><br>';
			$('.channelPromotions').append(HTML); 
		})
	})
}

YT.GoalManager = {
	load: function(a) {
		if (a < 0) goal = 0;
		if (a < 10 && a > 0) goal = 10 - a;
		if (a < 20 && a > 10) goal = 20 - a;
		if (a < 30 && a > 20) goal = 30 - a;
		if (a < 40 && a > 30) goal = 40 - a;
		if (a < 50 && a > 40) goal = 50 - a;
		if (a < 60 && a > 50) goal = 60 - a;
		if (a < 70 && a > 60) goal = 70 - a;
		if (a < 80 && a > 70) goal = 80 - a;
		if (a < 90 && a > 80) goal = 90 - a;
		if (a < 100 && a > 90) goal = 100 - a;
		if (a < 200 && a > 100) goal = 200 - a;
		if (a < 300 && a > 200) goal = 300 - a;
		if (a < 400 && a > 300) goal = 400 - a;
		if (a < 500 && a > 400) goal = 500 - a;
		if (a < 600 && a > 500) goal = 600 - a;
		if (a < 700 && a > 600) goal = 700 - a;
		if (a < 800 && a > 700) goal = 800 - a;
		if (a < 900 && a > 800) goal = 900 - a;
		if (a < 1000 && a > 900) goal = 1000 - a;
		if (a < 2000 && a > 1000) goal = 2000 - a;
		if (a < 3000 && a > 2000) goal = 3000 - a;
		if (a < 4000 && a > 3000) goal = 4000 - a;
		if (a < 5000 && a > 4000) goal = 5000 - a;
		if (a < 6000 && a > 5000) goal = 6000 - a;
		if (a < 7000 && a > 6000) goal = 7000 - a;
		if (a < 8000 && a > 7000) goal = 8000 - a;
		if (a < 9000 && a > 8000) goal = 9000 - a;
		if (a < 10000 && a > 9000) goal = 10000 - a;
		if (a < 20000 && a > 10000) goal = 20000 - a;
		if (a < 30000 && a > 20000) goal = 30000 - a;
		if (a < 40000 && a > 30000) goal = 40000 - a;
		if (a < 50000 && a > 40000) goal = 50000 - a;
		if (a < 60000 && a > 50000) goal = 60000 - a;
		if (a < 70000 && a > 60000) goal = 70000 - a;
		if (a < 80000 && a > 70000) goal = 80000 - a;
		if (a < 90000 && a > 80000) goal = 90000 - a;
		if (a < 100000 && a > 90000) goal = 100000 - a;
		if (a < 200000 && a > 100000) goal = 200000 - a;
		if (a < 300000 && a > 200000) goal = 300000 - a;
		if (a < 400000 && a > 300000) goal = 400000 - a;
		if (a < 500000 && a > 400000) goal = 500000 - a;
		if (a < 600000 && a > 500000) goal = 600000 - a;
		if (a < 700000 && a > 600000) goal = 700000 - a;
		if (a < 800000 && a > 700000) goal = 800000 - a;
		if (a < 900000 && a > 800000) goal = 900000 - a;
		if (a < 1000000 && a > 900000) goal = 1000000 - a;
		if (a < 2000000 && a > 1000000) goal = 2000000 - a;
		if (a < 3000000 && a > 2000000) goal = 3000000 - a;
		if (a < 4000000 && a > 3000000) goal = 4000000 - a;
		if (a < 5000000 && a > 4000000) goal = 5000000 - a;
		if (a < 6000000 && a > 5000000) goal = 6000000 - a;
		if (a < 7000000 && a > 6000000) goal = 7000000 - a;
		if (a < 8000000 && a > 7000000) goal = 8000000 - a;
		if (a < 9000000 && a > 8000000) goal = 9000000 - a;
		if (a < 10000000 && a > 9000000) goal = 10000000 - a;
		if (a < 20000000 && a > 10000000) goal = 20000000 - a;
		if (a < 30000000 && a > 20000000) goal = 30000000 - a;
		if (a < 40000000 && a > 30000000) goal = 40000000 - a;
		if (a < 50000000 && a > 40000000) goal = 50000000 - a;
		if (a < 60000000 && a > 50000000) goal = 60000000 - a;
		if (a < 70000000 && a > 60000000) goal = 70000000 - a;
		if (a < 80000000 && a > 70000000) goal = 80000000 - a;
		if (a < 90000000 && a > 80000000) goal = 90000000 - a;
		if (a < 100000000 && a > 90000000) goal = 100000000 - a;
		if (a < 200000000 && a > 100000000) goal = 200000000 - a;
		if (a < 300000000 && a > 200000000) goal = 300000000 - a;
		if (a < 400000000 && a > 300000000) goal = 400000000 - a;
		if (a < 500000000 && a > 400000000) goal = 500000000 - a;
		if (a < 600000000 && a > 500000000) goal = 600000000 - a;
		if (a < 700000000 && a > 600000000) goal = 700000000 - a;
		if (a < 800000000 && a > 700000000) goal = 800000000 - a;
		if (a < 900000000 && a > 800000000) goal = 900000000 - a;
		if (a < 1000000000 && a > 900000000) goal = 1000000000 - a;
		YT.UpdateManager.updateGoal(goal);
	}
}

YT.UpdateManager = {
	updateName: function(a) {
		document.querySelector(".name").innerText = a;
	},

	updateBanner: function(a) {
		document.querySelector('.banner').src = a;
	},
	
	updateAvatar: function(a) {
		document.querySelector('.pfp').src = a;
	},
	
	updateSubs: function(a) {
		document.querySelector(".main-odo").innerHTML = a;
	},
	
	updateGoal: function(a) {
		document.querySelector(".goal-odo").innerHTML = a;
	},
	
	updateTotalViews: function(a) {
		document.querySelector(".total-views-odo").innerHTML = a;
	},
	
	updateEstimatedCounts: function(a,b,c) {
		document.querySelector(".estimated-per-2-seconds-odo").innerHTML = a;
		document.querySelector(".estimated-per-1-min-odo").innerHTML = b;
		document.querySelector(".estimated-per-1-hr-odo").innerHTML = c;
	}
}

YT.UrlManager = {
	addUser: function() {
		if (!getUrlVars()["c"]) {
			if (window.location.href.indexOf("?")>-1){
				history.pushState(null,'',window.location.href+'&c='+user)
			} else {
				history.pushState(null,'',window.location.href+'?c='+user);
			}
		}
	},
	addTheme: function() {
		if (!getUrlVars()["t"]) {
			if (window.location.href.indexOf("?")>-1){
				history.pushState(null,'',window.location.href+'&t=0')
			} else {
				history.pushState(null,'',window.location.href+'?t=0');
			}
		}
	},
	
	addOdometer: function() {
		if (!getUrlVars()["o"]) {
			if (window.location.href.indexOf("?")>-1){
				history.pushState(null,'',window.location.href+'&o=0')
			} else {
				history.pushState(null,'',window.location.href+'?o=0');
			}
		}
	}
}


YT.ThemeManager = {
	load: function() {
		if (getUrlVars()["t"] == "0") {
			$(document).ready(function() {
				$("body").css("background-color", "#EFF4F8");
				$(".card").css("background-color", "white");
				$(".odometer").css("color", "#455a64");
				$(".text").css("color", "#000");
				$("h1").css("color", "#455a64");
				$("h4").css("color", "#000");
				$("h6").css("color", "#000");
				$("p").css("color", "#000");
				$("ul").css("background-color", "white");
				$(".odometer").removeClass('rainbow-text');
				$("li").removeClass('rainbow-text');
				$("h1").removeClass('rainbow-text');
				$("h4").removeClass('rainbow-text');
				$("h6").removeClass('rainbow-text');
				$("a").removeClass('rainbow-text');
				$(".links").removeClass('rainbow-text');
				$("p").removeClass('rainbow-text');
				$(".text").removeClass('rainbow-text');
				$("#square-dark").css("outline-style", "solid")
				$("#square-dark").css("outline-color", "white")
				$("#square-white").css("outline", "none")
				$("#square-rainbow-black").css("outline", "none")
				$("#square-rainbow-white").css("outline", "none")
				chart.chartBackground.css({color: '#fff'});
			})
		}
		if (getUrlVars()["t"] == "1") {
			$(document).ready(function() {
				$("body").css("background-color", "black");
				$(".card").css("background-color", "black");
				$(".odometer").css("color", "#808080");
				$(".text").css("color", "#808080");
				$("h1").css("color", "#808080");
				$("h4").css("color", "#808080");
				$("h6").css("color", "#808080");
				$("p").css("color", "#808080");
				$("ul").css("background-color", "black");
				$(".odometer").removeClass('rainbow-text');
				$("li").removeClass('rainbow-text');
				$("h1").removeClass('rainbow-text');
				$("h4").removeClass('rainbow-text');
				$("h6").removeClass('rainbow-text');
				$("p").removeClass('rainbow-text');
				$("a").removeClass('rainbow-text');
				$(".links").removeClass('rainbow-text');
				$(".text").removeClass('rainbow-text');
				$("#square-dark").css("outline-style", "solid")
				$("#square-dark").css("outline-color", "white")
				$("#square-white").css("outline", "none")
				$("#square-rainbow-black").css("outline", "none")
				$("#square-rainbow-white").css("outline", "none")
				chart.chartBackground.css({color: '#000'});
			})
		}
		if (getUrlVars()["t"] == "2") {
			$(document).ready(function() {
				$("body").css("background-color", "black");
				$(".card").css("background-color", "black");
				$(".odometer").addClass('rainbow-text');
				$(".text").addClass('rainbow-text');
				$("h1").addClass('rainbow-text');
				$("h4").addClass('rainbow-text');
				$("h6").addClass('rainbow-text');
				$("a").addClass('rainbow-text');
				$(".links").addClass('rainbow-text');
				$("p").addClass('rainbow-text');
				$("ul").css("background-color", "black");
				$("#square-dark").css("outline-style", "solid")
				$("#square-dark").css("outline-color", "white")
				$("#square-white").css("outline", "none")
				$("#square-rainbow-black").css("outline", "none")
				$("#square-rainbow-white").css("outline", "none")
				chart.chartBackground.css({color: '#000'});
			})
		}
		if (getUrlVars()["t"] == "3") {
			$(document).ready(function() {
				$("body").css("background-color", "#EFF4F8");
				$(".card").css("background-color", "white");
				$(".odometer").addClass('rainbow-text');
				$(".text").addClass('rainbow-text');
				$("h1").addClass('rainbow-text');
				$("h4").addClass('rainbow-text');
				$("h6").addClass('rainbow-text');
				$("a").addClass('rainbow-text');
				$(".links").addClass('rainbow-text');
				$("p").addClass('rainbow-text');
				$("ul").css("background-color", "white");
				$("#square-dark").css("outline-style", "solid")
				$("#square-dark").css("outline-color", "white")
				$("#square-white").css("outline", "none")
				$("#square-rainbow-black").css("outline", "none")
				$("#square-rainbow-white").css("outline", "none")
				chart.chartBackground.css({color: '#fff'});
			})
		}
	},
	setTheme: function(theme) {
		switch(theme) {
			case 0: {
				if (window.location.href.indexOf("t=0") > -1) {
				return;
				} else {
					$("body").css("background-color", "#EFF4F8");
					$(".card").css("background-color", "white");
					$(".odometer").css("color", "#455a64");
					$(".text").css("color", "#000");
					$("h1").css("color", "#455a64");
					$("h4").css("color", "#000");
					$("h6").css("color", "#000");
					$("p").css("color", "#000");
					$("ul").css("background-color", "white");
					$(".odometer").removeClass('rainbow-text');
					$("li").removeClass('rainbow-text');
					$("h1").removeClass('rainbow-text');
					$("h4").removeClass('rainbow-text');
					$("h6").removeClass('rainbow-text');
					$("a").removeClass('rainbow-text');
					$(".links").removeClass('rainbow-text');
					$("p").removeClass('rainbow-text');
					$(".text").removeClass('rainbow-text');
					$("#square-dark").css("outline-style", "solid")
					$("#square-dark").css("outline-color", "white")
					$("#square-white").css("outline", "none")
					$("#square-rainbow-black").css("outline", "none")
					$("#square-rainbow-white").css("outline", "none")
					chart.chartBackground.css({color: '#fff'});
					if (window.location.href.indexOf("?") > -1) {
						if (window.location.href.indexOf("t=1") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=1', '&t=0'));
						}
						if (window.location.href.indexOf("t=2") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=2', '&t=0'));
						}
						if (window.location.href.indexOf("t=3") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=3', '&t=0'));
						}
					} else {
						if (window.location.href.indexOf("t=1") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=1', '?t=0'));
						}
						if (window.location.href.indexOf("t=2") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=2', '?t=0'));
						}
						if (window.location.href.indexOf("t=3") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=3', '?t=0'));
						}
					}
				}
			} break;
			case 1: {
				if (window.location.href.indexOf("t=1") > -1) {
					return;
				} else {
					$("body").css("background-color", "black");
					$(".card").css("background-color", "black");
					$(".odometer").css("color", "#808080");
					$(".text").css("color", "#808080");
					$("h1").css("color", "#808080");
					$("h4").css("color", "#808080");
					$("h6").css("color", "#808080");
					$("p").css("color", "#808080");
					$("ul").css("background-color", "black");
					$(".odometer").removeClass('rainbow-text');
					$("li").removeClass('rainbow-text');
					$("h1").removeClass('rainbow-text');
					$("h4").removeClass('rainbow-text');
					$("h6").removeClass('rainbow-text');
					$("p").removeClass('rainbow-text');
					$("a").removeClass('rainbow-text');
					$(".links").removeClass('rainbow-text');
					$(".text").removeClass('rainbow-text');
					$("#square-dark").css("outline-style", "solid")
					$("#square-dark").css("outline-color", "white")
					$("#square-white").css("outline", "none")
					$("#square-rainbow-black").css("outline", "none")
					$("#square-rainbow-white").css("outline", "none")
					chart.chartBackground.css({color: '#000'});
					if (window.location.href.indexOf("?") > -1) {
						if (window.location.href.indexOf("t=0") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=0', '&t=1'));
						}
						if (window.location.href.indexOf("t=2") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=2', '&t=1'));
						}
						if (window.location.href.indexOf("t=3") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=3', '&t=1'));
						}
					} else {
						if (window.location.href.indexOf("t=0") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=0', '?t=1'));
						}
						if (window.location.href.indexOf("t=2") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=2', '?t=1'));
						}
						if (window.location.href.indexOf("t=3") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=3', '?t=1'));
						}
					}
				}
			} break;
			case 2: {
				if (window.location.href.indexOf("t=2") > -1) {
				return;
				} else {
					$("body").css("background-color", "black");
					$(".card").css("background-color", "black");
					$(".odometer").addClass('rainbow-text');
					$(".text").addClass('rainbow-text');
					$("h1").addClass('rainbow-text');
					$("h4").addClass('rainbow-text');
					$("h6").addClass('rainbow-text');
					$("a").addClass('rainbow-text');
					$(".links").addClass('rainbow-text');
					$("p").addClass('rainbow-text');
					$("ul").css("background-color", "black");
					$("#square-dark").css("outline-style", "solid")
					$("#square-dark").css("outline-color", "white")
					$("#square-white").css("outline", "none")
					$("#square-rainbow-black").css("outline", "none")
					$("#square-rainbow-white").css("outline", "none")
					chart.chartBackground.css({color: '#000'});
					if (window.location.href.indexOf("?") > -1) {
						if (window.location.href.indexOf("t=1") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=1', '&t=2'));
						}
						if (window.location.href.indexOf("t=0") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=0', '&t=2'));
						}
						if (window.location.href.indexOf("t=3") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=3', '&t=2'));
						}
					} else {
						if (window.location.href.indexOf("t=1") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=1', '?t=2'));
						}
						if (window.location.href.indexOf("t=0") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=0', '?t=2'));
						}
						if (window.location.href.indexOf("t=3") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=3', '?t=2'));
						}
					}
				}
			} break;
			case 3: {
				if (window.location.href.indexOf("t=3") > -1) {
				return;
				} else {
					$("body").css("background-color", "#EFF4F8");
					$(".card").css("background-color", "white");
					$(".odometer").addClass('rainbow-text');
					$(".text").addClass('rainbow-text');
					$("h1").addClass('rainbow-text');
					$("h4").addClass('rainbow-text');
					$("h6").addClass('rainbow-text');
					$("a").addClass('rainbow-text');
					$(".links").addClass('rainbow-text');
					$("p").addClass('rainbow-text');
					$("ul").css("background-color", "white");
					$("#square-dark").css("outline-style", "solid")
					$("#square-dark").css("outline-color", "white")
					$("#square-white").css("outline", "none")
					$("#square-rainbow-black").css("outline", "none")
					$("#square-rainbow-white").css("outline", "none")
					chart.chartBackground.css({color: '#fff'});
					if (window.location.href.indexOf("?") > -1) {
						if (window.location.href.indexOf("t=1") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=1', '&t=3'));
						}
						if (window.location.href.indexOf("t=0") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=0', '&t=3'));
						}
						if (window.location.href.indexOf("t=2") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=2', '&t=3'));
						}
					} else {
						if (window.location.href.indexOf("t=1") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=1', '?t=3'));
						}
						if (window.location.href.indexOf("t=0") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=0', '?t=3'));
						}
						if (window.location.href.indexOf("t=2") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=2', '?t=3'));
						}
					}
				}
			} break;
		}
	}
}

function search() {
	var replaceurl = document.getElementById('search').value.replace("%20", " ");
	var rightKey = rightKeys[Math.floor(Math.random()*rightKeys.length)];
    $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=channel&fields=items%2Fsnippet&q=' + replaceurl + '&key=' + rightKey, function(data) {
		YT.UpdateManager.updateName(data.items[0].snippet.title)
		YT.UpdateManager.updateAvatar(data.items[0].snippet.thumbnails.high.url)
		$.getJSON('https://www.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings&id='+data.items[0].snippet.channelId+'&key='+rightKey, function(data2) {
			YT.UpdateManager.updateBanner(data2.items[0].brandingSettings.image.bannerImageUrl)
		})
	   	user = data.items[0].snippet.channelId
	    	$.post('https://api.livecounts.io/subGainPost', {username: data.items[0].snippet.title, cid: data.items[0].snippet.channelId})
		window.history.pushState("", "", "/yt-sub-counter/?c="+user+'&t=0&o=0');
	    	estimatedArray = []
	    	chart.series[0].setData([]);
	    	document.querySelector('.share-link').value= window.location.href;
		document.querySelector('.embed-link').value = '<iframe height="180px" width="500px" frameborder="0" src="https://livecounts.io/yt-sub-counter/embed/?c='+user+'" allowfullscreen></iframe>';
		document.querySelector('.embed-obs-link').value = 'https://livecounts.io/yt-sub-counter/embed/?c='+user;
		DISQUS.reset({
		  reload: true,
		  config: function () {  
		    this.page.url = 'https://livecounts.io/yt-sub-counter/?c='+user; 
		  }
		});
	    setTimeout(function() {
			estimatedArray = []
		}, 3000)
    }).fail(function() {
		$.get(
			"https://cors.upbount.com/https://www.youtube.com/results?search_query="+replaceurl+"&sp=EgIQAg%253D%253D",
			function(data) {
				var x = 'window["ytInitialData"] =';
				var y = '    window["ytInitialPlayerResponse"] = null;';
				var str = data;
				var date = JSON.parse(str.substring(str.indexOf(x) + x.length, str.lastIndexOf(y)).slice(0, -2))
				window.location.href = "https://livecounts.io/yt-sub-counter/?c="+date.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].channelRenderer.channelId
			}
		);
	})
}

$("#searchbutton").click(function(){
	search();
})

document.getElementById("search").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search()
    }
})
