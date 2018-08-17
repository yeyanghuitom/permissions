package com.unicom.tools;

import org.apache.log4j.Logger;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;
import redis.clients.jedis.Pipeline;

import java.util.*;

/**
 * redis 工具类
 */
public class JedisPoolUtil {
	private static final Logger LOGGER = Logger.getLogger(JedisPoolUtil.class);

	private static JedisPool jedisPool = null;


	public static JedisPool redisPoolFactory() {
		if(jedisPool == null){
			JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
			jedisPoolConfig.setMaxTotal(200);
			jedisPoolConfig.setMaxIdle(50);
			jedisPoolConfig.setMinIdle(5);//设置最小空闲数
			jedisPoolConfig.setMaxWaitMillis(10000);
			jedisPoolConfig.setTestOnBorrow(true);
			jedisPoolConfig.setTestOnReturn(true);
			//Idle时进行连接扫描
			jedisPoolConfig.setTestWhileIdle(true);
			//表示idle object evitor两次扫描之间要sleep的毫秒数
			jedisPoolConfig.setTimeBetweenEvictionRunsMillis(30000);
			//表示idle object evitor每次扫描的最多的对象数
			jedisPoolConfig.setNumTestsPerEvictionRun(10);
			//表示一个对象至少停留在idle状态的最短时间，然后才能被idle object evitor扫描并驱逐；这一项只有在timeBetweenEvictionRunsMillis大于0时才有意义
			jedisPoolConfig.setMinEvictableIdleTimeMillis(60000);
			jedisPool = new JedisPool(jedisPoolConfig, DeploymentConfig.host, DeploymentConfig.port, 0, DeploymentConfig.password);
		}
        return jedisPool;
    }

	public static void main(String[] args) {
		Map<String, String> hash = new HashMap<String, String>();
		hash.put("total", "12");
		String key = "send_A1";
		JedisPoolUtil.hmset(key, hash);
		System.out.println(JedisPoolUtil.hmget(key,"total"));
//		Jedis jedis = jedisPool.getResource();
//		jedis.hmset(key, hash);
//		System.out.println(JedisPoolUtil.hgetall("send_A1"));

	}

	public static void usePipeline(String key,List<Map> list) {
		Jedis jedis = null;
		try {
			jedis=redisPoolFactory().getResource();
			// 从连接池中设置key
			Pipeline pl = jedis.pipelined();
            for (int i = 0; i < list.size(); i++) {
                pl.hmset(key,list.get(i));
            }
			pl.sync();
		} catch (Exception e) {
			LOGGER.error(e.getMessage());
		} finally {
			if (jedis != null) {
				jedis.close();
			}
		}
	}
	/**
	 * <p>
	 * 通过key同时设置 hash的多个field
	 * </p>
	 * 
	 * @param key
	 * @param hash
	 * @return 返回OK 异常返回null
	 */
	public static String hmset(String key, Map<String, String> hash) {
		String res = null;
		Jedis jedis = null;
		try {
			jedis=redisPoolFactory().getResource();
			// 从连接池中设置key
			res = jedis.hmset(key,hash);
		} catch (Exception e) {
			LOGGER.error(e.getMessage());
		} finally {
			if (jedis != null) {
				jedis.close();
			}
		}
		return res;
	}

	/**
	 * 判断key是否存在
	 *
	 */
	public static boolean keyExists(String key) {
		Boolean res = false;
		Jedis jedis = null;
		try {
			jedis=redisPoolFactory().getResource();
			res = jedis.exists(key);
		} catch (Exception e) {
			LOGGER.error(e.getMessage());
		} finally {
			if (jedis != null) {
				jedis.close();
			}

		}
		return res;

	}

	/**
	 * <p>
	 * 通过key 和 field 获取指定的 value
	 * </p>
	 * 
	 * @param key
	 * @param field
	 * @return 没有返回null
	 */
	public static String hget(String key, String field) {

		String res = null;
		Jedis jedis = null;
		try {
			jedis=redisPoolFactory().getResource();
			res = jedis.hget(key, field);
		} catch (Exception e) {

			LOGGER.error(e.getMessage());
		} finally {
			if (null != jedis) {
				// 关闭，检测连接是否有效
				jedis.close();
			}
		}
		return res;
	}

	/**
	 * <p>
	 * 通过key 和 fields 获取指定的value 如果没有对应的value则返回null
	 * </p>
	 * 
	 * @param key
	 * @param fields
	 *            可以使 一个String 也可以是 String数组
	 *            	new String[]{"aaa","bbb"}
	 *            或者"aaa","bbb"
	 * @return
	 */
	public static List<String> hmget(String key, String... fields) {
		List<String> res = null;
		Jedis jedis = null;
		try {
			jedis=redisPoolFactory().getResource();
			res = jedis.hmget(key, fields);
		} catch (Exception e) {
			LOGGER.error(e.getMessage());
		} finally {
			if (null != jedis) {
				// 关闭，检测连接是否有效
				jedis.close();
			}
		}
		return res;
	}

	/**
	 * <p>
	 * 通过key给指定的field的value加上给定的值
	 * </p>
	 * 
	 * @param key
	 * @param field
	 * @param value
	 * @return
	 */
	public static Long hincrby(String key, String field, Long value) {
		Long res = null;
		Jedis jedis = null;
		try {
			jedis=redisPoolFactory().getResource();
			res = jedis.hincrBy(key, field, value);
		} catch (Exception e) {
			LOGGER.error(e.getMessage());
		} finally {
			if (null != jedis) {
				// 关闭，检测连接是否有效
				jedis.close();
			}
		}
		return res;
	}

	/**
	 * <p>
	 * 通过key和field判断是否有指定的value存在
	 * </p>
	 * 
	 * @param key
	 * @param field
	 * @return
	 */
	public static Boolean hexists(String key, String field) {
		Boolean res = false;
		Jedis jedis = null;
		try {
			jedis=redisPoolFactory().getResource();
			res = jedis.hexists(key, field);
		} catch (Exception e) {
			LOGGER.error(e.getMessage());
		} finally {
			if (null != jedis) {
				// 关闭，检测连接是否有效
				jedis.close();
			}
		}
		return res;
	}

	/**
	 * <p>
	 * 通过key返回field的数量
	 * </p>
	 * 
	 * @param key
	 * @return
	 */
	public static Long hlen(String key) {
		Long res = null;
		Jedis jedis = null;
		try {
			jedis=redisPoolFactory().getResource();
			res = jedis.hlen(key);
		} catch (Exception e) {
			LOGGER.error(e.getMessage());
		} finally {
			if (null != jedis) {
				// 关闭，检测连接是否有效
				jedis.close();
			}
		}
		return res;

	}

	/**
	 * <p>
	 * 通过key 删除指定的 field
	 * </p>
	 * 
	 * @param key
	 * @param fields
	 *            可以是 一个 field 也可以是 一个数组
	 * @return
	 */
	public static Long hdel(String key, String... fields) {
		Long res = null;
		Jedis jedis = null;
		try {
			jedis=redisPoolFactory().getResource();
			res = jedis.hdel(key, fields);
		} catch (Exception e) {
			LOGGER.error(e.getMessage());
		} finally {
			if (null != jedis) {
				// 关闭，检测连接是否有效
				jedis.close();
			}
		}
		return res;
	}

	/**
	 * <p>
	 * 通过key返回所有的field
	 * </p>
	 * 
	 * @param key
	 * @return
	 */
	public static Set<String> hkeys(String key) {
		Set<String> res = null;
		Jedis jedis = null;
		try {
			jedis=redisPoolFactory().getResource();
			res = jedis.hkeys(key);
		} catch (Exception e) {
			LOGGER.error(e.getMessage());
		} finally {
			if (null != jedis) {
				// 关闭，检测连接是否有效
				jedis.close();
			}
		}
		return res;
	}

	/**
	 * <p>
	 * 通过key返回所有和key有关的value
	 * </p>
	 * 
	 * @param key
	 * @return
	 */
	public static List<String> hvals(String key) {
		List<String> res = null;
		Jedis jedis = null;
		try {
			jedis=redisPoolFactory().getResource();
			res = jedis.hvals(key);
		} catch (Exception e) {

			LOGGER.error(e.getMessage());
		} finally {
			if (null != jedis) {
				// 关闭，检测连接是否有效
				jedis.close();
			}
		}
		return res;
	}

	/**
	 * <p>
	 * 通过key获取所有的field和value
	 * </p>
	 * 
	 * @param key
	 * @return
	 */
	public static Map<String, String> hgetall(String key) {

		Map<String, String> res = null;
		Jedis jedis = null;
		try {
			jedis=redisPoolFactory().getResource();
			res = jedis.hgetAll(key);
		} catch (Exception e) {
			// TODO
			LOGGER.error(e.getMessage());
		} finally {
			if (null != jedis) {
				// 关闭，检测连接是否有效
				jedis.close();
			}
		}
		return res;
	}
	public static void expire(LinkedHashMap<String, String> partkeys,int time) {
		Jedis jedis = null;
		try {
			jedis=redisPoolFactory().getResource();
            String key = generateKey(partkeys);
			jedis.expire(key,time);
		} catch (Exception e) {
			// TODO
			LOGGER.error(e.getMessage());
		} finally {
			if (null != jedis) {
				// 关闭，检测连接是否有效
				jedis.close();
			}
		}
	}
    public static String generateKey(LinkedHashMap<String, String> partkeys) {
        String key = "";
        if (partkeys != null) {
            for (Map.Entry<String, String> entry : partkeys.entrySet()) {
                if (key == "") {
                    key = key + entry.getValue();
                } else {
                    key = key + ":" + entry.getValue();
                }
            }
        }
        return key;
    }
    public static void setDateString(LinkedHashMap<String, String> partkeys,String value) throws Exception{
        // 通过条件获取key
        setDateString(partkeys,value,60*5);
    }
	public static void setDateString(LinkedHashMap<String, String> partkeys,String value,int time) throws Exception{
        Jedis jedis = null;
        try {
            jedis=redisPoolFactory().getResource();
            String key = generateKey(partkeys);
            jedis.set(key,value);
            jedis.expire(key, time);
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
        } finally {
            if (null != jedis) {
                // 关闭，检测连接是否有效
                jedis.close();
            }
        }
    }
    public static String getDateString(LinkedHashMap<String, String> partkeys) throws Exception{
        Jedis jedis = null;
        String key = generateKey(partkeys);
        String s ="";
        try {
            jedis=redisPoolFactory().getResource();
             s = jedis.get(key);
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
        } finally {
            if (null != jedis) {
                // 关闭，检测连接是否有效
                jedis.close();
            }
        }
        return s;
    }
//    删除key
    public static long hdelete(LinkedHashMap<String, String> partkeys) {
        Jedis jedis = null;
        String key = generateKey(partkeys);
        long s =0;
        try {
            jedis=redisPoolFactory().getResource();
            s=jedis.del(key);
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
        } finally {
            if (null != jedis) {
                // 关闭，检测连接是否有效
                jedis.close();
            }
        }
        return s;
    }
    //自增从1开始
    public static Long incrDate(LinkedHashMap<String, String> partkeys) throws Exception{
        Jedis jedis = null;
        String key = generateKey(partkeys);
        long s =0;
        try {
            jedis=redisPoolFactory().getResource();
            s=jedis.incr(key);
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
        } finally {
            if (null != jedis) {
                // 关闭，检测连接是否有效
                jedis.close();
            }
        }
        return s;
    }
    //	插入到列表头部
    public static long lrpushKey(String key,String value) {
        Jedis jedis = null;
        long s =0;
        try {
            jedis=redisPoolFactory().getResource();
            s=jedis.lpush(key, value);
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
        } finally {
            if (null != jedis) {
                // 关闭，检测连接是否有效
                jedis.close();
            }
        }
        return s;
    }
    //	设置key的过期时间
    public static long expireKey(String key,int expireTime) {
        Jedis jedis = null;
        long s =0;
        try {
            jedis=redisPoolFactory().getResource();
            s=jedis.expire(key, expireTime);
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
        } finally {
            if (null != jedis) {
                // 关闭，检测连接是否有效
                jedis.close();
            }
        }
        return s;
    }
    public static void setDatebate(byte[] key,byte[] value) throws Exception{
        setDatebate(key,value,100);

    }
    public static void setDatebate(byte[] key,byte[] value,int time) throws Exception{
        Jedis jedis = null;
        long s =0;
        try {
            jedis=redisPoolFactory().getResource();
            jedis.set(key,value);
            jedis.expire(key, time);
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
        } finally {
            if (null != jedis) {
                // 关闭，检测连接是否有效
				//                jedis.close();
				redisPoolFactory().returnResource(jedis);
            }
        }
    }
    public static byte[] getDatebate(byte[] key) throws Exception{
        Jedis jedis = null;
        byte[] bytes =null;
        try {
            jedis=redisPoolFactory().getResource();
            bytes = jedis.get(key);
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
        } finally {
            if (null != jedis) {
                // 关闭，检测连接是否有效
                jedis.close();
//                redisPoolFactory().returnResource(jedis);
            }
        }
        return bytes;
    }
	// ------------------------------hash
	// end------------------------------------------------

	/**
	 * 返还到连接池
	 *
	 * @param pool
	 * @param jedis
	 */
	// public static void returnResource(ShardedJedisPool pool, ShardedJedis
	// jedis) {
	// if (jedis != null) {
	// pool.returnResource(jedis);
	// }
	// }
}
